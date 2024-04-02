import { Link } from "react-router-dom";
import {
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";
import utilStyles from "../styles/Utils.module.css";
import styles from "../styles/Pagination.module.css";

interface PaginationProps {
  page: number;
  pages: number;
  link: string;
}

const Pagination = ({ page, pages, link }: PaginationProps) => {
  // change Link to be not a link if it should be innactive
  return (
    pages > 1 && (
      <div className={utilStyles.displayBox}>
        <div className={styles.pagination}>
          {Number(page) === 1 ? (
            <p className="disabled-btn">
              <BiSolidLeftArrowSquare />
            </p>
          ) : (
            <Link to={`${link}/${Number(page) - 1}`} title="Previous">
              <BiSolidLeftArrowSquare />
            </Link>
          )}
          <p>{page}</p>
          {Number(page) === Number(pages) ? (
            <p className="disabled-btn">
              <BiSolidRightArrowSquare />
            </p>
          ) : (
            <Link to={`${link}/${Number(page) + 1}`} title="Next">
              <BiSolidRightArrowSquare />
            </Link>
          )}
        </div>
      </div>
    )
  );
};

export default Pagination;
