import React from "react";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";

const Post = (props) => {
  return (
    <div className="bg-slate-200 w-[700px] h-auto m-11 mt-0 rounded-lg">
      <div>
        <div className="p-5">
          <HeaderPost
            avatar={props.avatarAccountPost}
            username={props.usernameAccountPost}
          ></HeaderPost>
          <BodyPost 
              key={props.key}
              title={props.title}
              content={props.content}></BodyPost>
        </div>
      </div>
    </div>
  );
};

export default Post;
