import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import styles from "../styles/Blog.module.css";

interface BlogDisplayInterface {
  blog: string;
}

const BlogDisplay = ({ blog }: BlogDisplayInterface) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(`/markdown/${blog}`)
      .then((res) => res.text())
      .then((blog) => setText(blog))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.entryBlog}>
      {text && <Markdown>{text}</Markdown>}
    </div>
  );
};

export default BlogDisplay;
