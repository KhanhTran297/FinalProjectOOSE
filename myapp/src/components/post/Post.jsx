import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import usePost from "@/hook/usePost";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";
import useComment from "@/hook/useComment";

const Post = (props) => {
  const { deletePost } = usePost();
  const { getListComment } = useComment();
  const selector = useSelector((state) => state.comment);
  const listComment = selector.listComment;
  const handleDeletePost = (id) => {
    deletePost(id);
  };
  useEffect(() => {
    getListComment();
  }, [listComment]);
  return (
    <div className="bg-slate-200 w-[700px] h-auto m-11 mt-0 rounded-lg">
      <div>
        <div className="p-5">
          <HeaderPost {...props} onDelete={() => handleDeletePost(props.id)} />
          <BodyPost {...props} />
        </div>
      </div>
    </div>
  );
};

export default Post;
