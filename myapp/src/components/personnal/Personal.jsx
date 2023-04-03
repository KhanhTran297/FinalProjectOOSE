import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "../Forum/CreatePost";
import Post from "../post/Post";
import HeaderPersonal from "./HeaderPersonal";

const Personal = () => {
  //hooks
  const selector = useSelector((state) => state.account);
  //variables
  const userAccount = selector.account;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="ml-2 mr-2  flex flex-col place-items-center justify-center w-full">
        <HeaderPersonal></HeaderPersonal>
        <CreatePost avatar={userAccount?.avatar}></CreatePost>
        <div className="mt-3">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.fullName}
          ></Post>
        </div>
        <div className="">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.fullName}
          ></Post>
        </div>
        <div className="">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.fullName}
          ></Post>
        </div>
        <div className="">
          <Post
            avatar={userAccount?.avatar}
            username={userAccount?.fullName}
          ></Post>
        </div>
      </div>
    </div>
  );
};

export default Personal;
