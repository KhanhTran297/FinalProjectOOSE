import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import CreatePost from "./CreatePost";
import LeftSideForum from "./LeftSideForum";
import RightSideForum from "./RightSideForum";

const Forum = () => {
  //hooks
  const selector = useSelector((state) => state.account);
  //variables
  const userAccount = selector.account;
  return (
    <div className="grid grid-cols-[20%_60%_20%]">
      <LeftSideForum className="fixed"></LeftSideForum>
      <div className="ml-2 mr-2  flex flex-col place-items-center justify-center">
        <div className="mr-11 ml-11 mb-3 mt-3 w-[700px] h-[72px] rounded-lg bg-slate-200 border border-3 border-solid border-blue-600">
          <div className="pt-6 pb-4 pl-6 pr-6 flex ">
            <span className="w-full text-xl font-medium text-center text-blueborder">
              Discuss
            </span>
          </div>
        </div>
        <CreatePost avatar={userAccount?.avatar}></CreatePost>
        <div className="mt-3">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.username}
          ></Post>
        </div>
        <div className="">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.username}
          ></Post>
        </div>
        <div className="">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.username}
          ></Post>
        </div>
        <div className="">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.username}
          ></Post>
        </div>
      </div>
      <RightSideForum></RightSideForum>
    </div>
  );
};

export default Forum;
