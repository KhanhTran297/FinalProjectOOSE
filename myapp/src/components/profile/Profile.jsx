import useAccount from "@/hook/useAccount";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BasicList from "./BasicList";
import BasicTabs from "./TabPanel";

const Profile = () => {
  //hooks
  //   const { profileAccount, getProfileAccount, loadingPage } = useAccount();
  //   console.log("loading page", loadingPage);
  //   console.log("profile user:", profileAccount);
  const selector = useSelector((state) => state.account);
  const userAccount = selector.account;
  const [modifyFullname, setModifyFullname] = useState(false);
  //methods
  const handleModifyFullname = () => {
    setModifyFullname((prevstate) => prevstate);
  };
  //variables

  return (
    <div className="grid grid-cols-[30%_70%] h-full  mt-4 ml-2 mr-2">
      <div className="left  grid grid-rows-[40%_60%]">
        <div className="imgAvaContainer flex justify-center items-center flex-col border-solid ">
          <div className="imgBox h-[80%] w-[70%] rounded-full flex flex-col justify-center">
            <img
              src={userAccount?.avatar}
              alt=""
              className=" w-full h-full rounded-full shadow-2xl"
            />
          </div>
          <button className=" text-header font-semibold text-[18px] mt-2 hover:text-red-400">
            Change photo
          </button>
        </div>
        <div className="toolbox">
          <BasicList></BasicList>
        </div>
      </div>
      <div className="right grid grid-rows-[40%_60%]">
        <div className="top flex flex-col relative">
          <div className="username flex flex-row items-center">
            <p className="text-[38px] font-semibold pl-[10px]">
              {userAccount?.username}
            </p>
            <i className="fa-solid fa-location-dot ml-[12px] text-[12px] opacity-60">
              {" "}
              <span className="ml-[2px] text-[12px] font-light opacity-60">
                NhaTrang, VN
              </span>
            </i>
          </div>
          <div className="bg-img  w-full h-[80%] relative rounded-[10px]">
            <img
              src="./img/bgprofile.jpg"
              alt=""
              className=" absolute w-full h-full rounded-[10px] shadow-2xl"
            />
          </div>
        </div>

        <div className="bottom ">
          <BasicTabs dataUserAccount={userAccount}></BasicTabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
