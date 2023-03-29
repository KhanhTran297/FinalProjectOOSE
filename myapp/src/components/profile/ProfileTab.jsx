import React from "react";
import BasicTabs from "./TabPanel";

const ProfileTab = (props) => {
  return (
    <div className="right flex flex-col flex-1">
      <div className="top flex flex-col  relative">
        <div className="username flex flex-row items-center">
          <p className="text-[38px] font-semibold pl-[10px]">
            {props.userAccount?.username}
          </p>
          <i className="fa-solid fa-location-dot ml-[12px] text-[12px] opacity-60">
            {" "}
            <span className="ml-[2px] text-[12px] font-light opacity-60">
              NhaTrang, VN
            </span>
          </i>
        </div>
        <div className="bg-img  w-full h-[300px] relative rounded-[10px]">
          <img
            src="./img/bgprofile.jpg"
            alt=""
            className=" absolute w-full h-full rounded-[10px] shadow-2xl"
          />
        </div>
      </div>

      <div className="bottom mt-5 ">
        <BasicTabs dataUserAccount={props.userAccount}></BasicTabs>
      </div>
    </div>
  );
};

export default ProfileTab;
