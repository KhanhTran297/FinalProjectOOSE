import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePost from "@/hook/usePost";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";

const Post = (props) => {
  const selectorPost = useSelector((state) => state.post);
  const { deletePost } = usePost();
  const { updatePost } = usePost();
  const [updatedContent, setUpdatedContent] = useState(props.content);
  const [contentError, setContentError] = useState(false);  
  
  const handleDeletePost = (id) => {
    deletePost(id)
  }

  const handleUpdatePost = (id,value) => {
    if (updatedContent.trim() === "") {
      setContentError(true);
      return;
    }
    setContentError(false);
    const data = { ...value,id:id, contentPost: updatedContent };
    updatePost(data);
    console.log("data update Post",data)
  };
  
  const handleChangeUpdateContent = (html) => {
    setUpdatedContent(html);
    setContentError(false);
  };

  useEffect(() => {
    setUpdatedContent(props.content);
  }, [props.content]);

  return (
    <div className="bg-slate-200 w-[700px] h-auto m-11 mt-0 rounded-lg">
      <div>
        <div className="p-5">
          <HeaderPost
            {...props}
            onDelete={() => handleDeletePost(props.id)}
            onChange={() => handleChangeUpdateContent()}
            onUpdate={(value) => handleUpdatePost(props.id,value)}
            updatedContent={updatedContent}
            contentError={contentError}
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
