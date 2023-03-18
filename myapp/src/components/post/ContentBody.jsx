import React from "react";
import ImageBody from "./ImageBody";
import ReadMoreReadLess from "./ReadMoreReadLess";

const ContentBody = () => {
  return (
    <div>
      <ReadMoreReadLess limit={200}>Hôm nay trời đẹp</ReadMoreReadLess>
      <ImageBody></ImageBody>
    </div>
  );
};

export default ContentBody;
