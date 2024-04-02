import { Link } from "react-router-dom";
import { useGetSeriesIndexQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import Series from "../models/Series";
import styles from "../styles/Series.module.css";
import utilStyles from "../styles/Utils.module.css";

const SeriesIndexScreen = () => {
  const { data: seriesData, isLoading, error } = useGetSeriesIndexQuery("");
  return (
    <div>
      <Meta />
      {isLoading && "Loading..."}
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      {seriesData &&
        seriesData.map((series: Series, idx: number) => (
          <div key={idx} className={utilStyles.displayBox}>
            <h2>{series.seriesTitle}</h2>
            <div className={styles.seriesDescription}>{series.description}</div>
            <Link to={`/series/${series.slug}`}>
              <div className="hp-btn single-link-btn">View Episodes</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SeriesIndexScreen;
