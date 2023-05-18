import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePost from "@/hook/usePost";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";
import useBookmark from "@/hook/useBookmark";

const Post = (props) => {
  const { deletePost } = usePost();
  const { createBookmark, deleteBookmark } = useBookmark();
  const selectorBookmark = useSelector((state) => state.bookmark);
  const listBookmark = selectorBookmark.listBookmark;
  const idBookmarked = listBookmark?.content?.filter((bookmark) => bookmark.postDto.id === props.id).map((bookmark) => {
    return bookmark.id;
  });
  
  const handleDeletePost = (id) => {
    deletePost(id)
  }
  const handleCreateBookmark = (id) => {
    
    const data = {postId: id}
    createBookmark(data);
  }

  const handleDeleteBookmark = (id) => {
    deleteBookmark(id);
  }
  

  
  


  return (
    <div className="bg-slate-200 w-[700px] h-auto m-11 mt-0 rounded-lg">
      <div>
        <div className="p-5">
          <HeaderPost
            {...props}
            onDelete={() => handleDeletePost(props.id)}
            onBookmark={() => handleCreateBookmark(props.id)}
            onDeleteBookmark={() => handleDeleteBookmark(idBookmarked)}

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
