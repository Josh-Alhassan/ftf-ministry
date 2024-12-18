import React from "react";

import style from "./BlogPage.module.css";
import SecondaryHeader from "../utilities/SecondaryHeader";

function BlogPage() {
  return (
    <div className={style.blogPage}>
      <SecondaryHeader color="#fff" textAlign="center">
        Coming Soon
      </SecondaryHeader>
    </div>
  );
}

export default BlogPage;
