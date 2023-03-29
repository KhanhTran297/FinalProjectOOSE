import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Avatar from "react-avatar-edit";

const UpdateAvatar = ({ onClose }) => {
  //hooks
  const [imgCrop, setImgCrop] = useState(false);
  //method
  const onCroped = (view) => {
    setImgCrop(view);
    console.log(view);
  };
  const onClosed = () => {
    setImgCrop(null);
  };
  return (
    <div className=" w-[600px] h-[600px] flex flex-col absolute justify-center items-center top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-white shadow-xl">
      <Avatar
        width={400}
        height={400}
        onCrop={onCroped}
        onClose={onClosed}
      ></Avatar>
      <div className=" flex flex-row mt-3">
        <button
          onClick={onClose}
          className="bg-red-400 mr-3 pt-[12px] pb-[12px] pr-[24px] pl-[24px] text-center rounded-[10px]"
        >
          Close
        </button>
        <button className="bg-green-400 pt-[12px] pb-[12px] pr-[24px] pl-[24px] text-center rounded-[10px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateAvatar;
