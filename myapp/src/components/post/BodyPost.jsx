import React from "react";
import Comment from "../reply/Comment";
import ReadMoreReadLess from "./ReadMoreReadLess";


const BodyPost = () => {
  return (
    <div className="p-4">
      <div className="text-2xl font-semibold">This is title</div>
      <ReadMoreReadLess limit={200}>Hôm nay trời đẹp</ReadMoreReadLess>
      <Comment></Comment>
    </div>
  );
};

export default BodyPost;
