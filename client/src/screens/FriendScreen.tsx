import { useGetFriendsQuery } from "../slices/friendsApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import Friend from "../models/Friend";
import utilStyles from "../styles/Utils.module.css";
import styles from "../styles/Faq.module.css";

const FriendsScreen = () => {
  const { data: friendData, isLoading, error } = useGetFriendsQuery("");
  return (
    <>
      <Meta />
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <div className={utilStyles.displayBox}>
        <h2>Friends of the Show</h2>
        <p>
          Here's a group of folks we've colabed with in the past who we think
          are swell and deserve a listen.
        </p>
        <p>(Not a comprehensive list)</p>
        {friendData?.length && (
          <div>
            {friendData.map((friend: Friend, idx: number) => (
              <div key={idx}>
                <div className={styles.faqQuestion}>
                  <a href={friend.url} target="_blank">
                    {friend.name}
                  </a>
                </div>
                <div className={styles.faqAnswer}>{friend.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FriendsScreen;
