import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import CreatePost from "./CreatePost";
import LeftSideForum from "./LeftSideForum";
import RightSideForum from "./RightSideForum";
import TitleForum from "./TitleForum";

const Forum = () => {
  //hooks
  const selector = useSelector((state) => state.account);
  //variables
  const userAccount = selector.account;
  return (
    <div className="grid grid-cols-[20%_60%_20%]">
      <LeftSideForum className="fixed"></LeftSideForum>
      <div className="ml-2 mr-2  flex flex-col place-items-center justify-center">
        <TitleForum></TitleForum>
        <CreatePost avatar={userAccount?.avatar}></CreatePost>
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
