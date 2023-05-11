import React from "react";


const Comment = () => {
  return (
    <div>
      <div className="border-b-[0.5px] border-solid p-2 border-gray-400">
        <i className="font-bold">3 bình luận</i>
      </div>
      <form>
        <div className=" mt-3 relative ">
          <input
            type="text"
            placeholder="Bạn nghĩ gì về chủ đề này"
            className="w-[100%] p-4  h-20 border-gray-400 border-2 border-solid font-xs rounded-lg bg-gray-100"
          />
        </div>
      </form>
    </div>
  );
};

export default Comment;
