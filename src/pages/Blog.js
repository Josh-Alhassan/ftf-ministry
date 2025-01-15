import React from "react";
import PropTypes from "prop-types";
import style from "./Blog.module.css";
import Navigation from "../components/Navigation";
import SecondaryHeader from "../utilities/SecondaryHeader";
import BlogPage from "../sections/BlogPage";

const Blog = ({ title }) => {
  return (
    <>
      <Navigation />
      <div className={style.blog}>
        <div style={{ padding: "90px", margin: "0 auto" }}>
          <SecondaryHeader
            textTransform="capitalize"
            color="#FFF"
            textAlign="center"
          >
            Blog Page
          </SecondaryHeader>
        </div>
      </div>
      <BlogPage />
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
};

Blog.defaultProps = {
  title: "Blog Page",
};

export default Blog;
