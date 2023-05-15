import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePost from "@/hook/usePost";
import useComment from "@/hook/useComment";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";

const Post = (props) => {
  const selectorPost = useSelector((state) => state.post);
  const { deletePost } = usePost();
  
  const handleDeletePost = (id) => {
    deletePost(id)
  }


  return (
    <div className="bg-slate-200 w-[700px] h-auto m-11 mt-0 rounded-lg">
      <div>
        <div className="p-5">
          <HeaderPost
            {...props}
            onDelete={() => handleDeletePost(props.id)}

          />
          <BodyPost 
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
