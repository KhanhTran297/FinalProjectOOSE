import React from "react";
import Comment from "../reply/Comment";
import ContentBody from "./ContentBody";
import TitlePost from "./TitlePost";

const BodyPost = () => {
  return (
    <div className="p-4">
      <TitlePost></TitlePost>
      <ContentBody></ContentBody>
      <Comment></Comment>
    </div>
  );
};

export default BodyPost;
