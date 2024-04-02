import { useGetFaqsQuery } from "../slices/faqsApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import Faq from "../models/Faq";
import utilStyles from "../styles/Utils.module.css";
import styles from "../styles/Faq.module.css";

const FaqsScreen = () => {
  const { data: faqData, isLoading, error } = useGetFaqsQuery("");
  return (
    <>
      <Meta />
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <div className={utilStyles.displayBox}>
        <h2>FAQS</h2>
        {faqData?.length && (
          <div>
            {faqData.map((faq: Faq, idx: number) => (
              <div key={idx}>
                <div className={styles.faqQuestion}>{faq.question}</div>
                <div className={styles.faqAnswer}>{faq.answer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FaqsScreen;
