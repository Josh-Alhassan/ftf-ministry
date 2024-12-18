import React from "react";
import PropTypes from "prop-types";
import styles from "./Blog.module.css";
import Navigation from "../components/Navigation";
import SecondaryHeader from "../utilities/SecondaryHeader";
import BlogPage from "../sections/BlogPage";

const Blog = ({ title }) => {
  return (
    <div className={styles.blog}>
      <Navigation />

      <header className={styles.pageHeader}>
        <SecondaryHeader
          textTransform="capitalize"
          color="#FFF"
          textAlign="center"
        >
          {title}
        </SecondaryHeader>
      </header>

      <main>
        <BlogPage />
      </main>
    </div>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
};

Blog.defaultProps = {
  title: "Blog Page",
};

export default Blog;
