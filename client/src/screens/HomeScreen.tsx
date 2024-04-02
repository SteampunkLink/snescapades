import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllEntriesQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import EntryListItem from "../components/EntryListItem";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Entry from "../models/Entry";
import utilStyles from "../styles/Utils.module.css";

const HomeScreen = () => {
  const { pageNum } = useParams();
  const { data, isLoading, error } = useGetAllEntriesQuery(pageNum);
  useEffect(() => {
    //force nav to top on page change
    window.scrollTo(0, 0);
  }, [pageNum]);
  return (
    <>
      <Meta />
      <div>
        {isLoading && "Loading..."}
        {error && <ErrorMsg error={error} />}
        {isLoading && <Loading />}
        {data?.entries &&
          data.entries.map((entry: Entry, idx: number) => (
            <div key={idx} className={utilStyles.displayBox}>
              <EntryListItem key={idx} entry={entry} />
              <Link to={`/episode/${entry.slug}/${entry.episodeNumber}`}>
                <div className="hp-btn single-link-btn">Read More</div>
              </Link>
            </div>
          ))}
      </div>
      {data?.page && (
        <Pagination page={data?.page} pages={data?.pages} link="/page" />
      )}
    </>
  );
};

export default HomeScreen;
