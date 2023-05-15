import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useComment from "@/hook/useComment";
import BoxComment from "./BoxComment";
import Textarea from "@/textarea/Textarea";


const Comment = (props) => {
  const [showChildComment, setShowChildComment] = useState({});
  
  const selectorComment = useSelector((state) => state.comment);
  const { getListComment , createComment} = useComment();
  const listComment = selectorComment.listComment;
  const filteredListComment = listComment?.content?.filter(comment => comment.postComment.id === props.id)
  const schema = yup.object({
    contentComment: yup
      .string()
      .max(50, "Content should not exceed 100 characters"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleCreateComment = (postId,value) => {
    const data = { ...value, postId: postId};
    createComment(data)
    
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // prevent the default behavior of textarea
      handleSubmit((value)=>handleCreateComment(props.id,value))();
    }
  };
  return (
    <div>
      <div className="border-b-[0.5px] border-solid p-2 border-gray-400">
        <i className="font-bold">{filteredListComment?.length} comments</i>
      </div>
      <form onSubmit={handleSubmit(handleCreateComment)}>
        <div className=" mt-3 relative ">
        <Textarea
                control={control}
                name="contentComment"
                type="text"
                placeholder="Content comment"
                error={errors.contentComment?.message}
                onKeyDown={handleKeyDown}
                className=" mr-5  mb-3 w-[100%] border-2  p-2 overflow-scroll font-semibold"
              />
        </div>
        {/* <button type="submit">Send</button> */}
      </form>
      <div className="mt-3">
        {filteredListComment?.map((comment) => (
            <div key={comment.id}>
              <BoxComment
                id={comment.id}
                content={comment.contentComment}
                fullname={comment.accountComment.fullName}
                avatar={comment.accountComment.avatarPath}
                email={comment.accountComment.email}
                createdDate={comment.createdDate}
              />
              {comment.hasChild && (
                <button
                  onClick={() =>
                    setShowChildComment((prev) => ({ ...prev, [comment.id]: !prev[comment.id] }))
                  }
                >
                  {showChildComment[comment.id] ? "Ẩn" : "Xem thêm"}
                </button>
              )}
              {/* {showChildComment[comment.id] && (
                <div>
                  {listChildComment
                    .filter((childComment) => childComment.parentId === comment.id)
                    .map((childComment) => (
                      <BoxComment
                        key={childComment.id}
                        id={childComment.id}
                        content={childComment.contentComment}
                        fullname={childComment.accountComment.fullName}
                        avatar={childComment.accountComment.avatarPath}
                        email={childComment.accountComment.email}
                        createdDate={childComment.createdDate}
                      />
                    ))}
                </div>
              )} */}
            </div>
            
          ))}

        
      </div>
    </div>
  );
};

export default Comment;
