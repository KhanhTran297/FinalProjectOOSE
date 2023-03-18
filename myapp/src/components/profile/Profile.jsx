import useAccount from "@/hook/useAccount";
import React from "react";
import { useSelector } from "react-redux";
import BasicList from "./BasicList";

const Profile = () => {
  //hooks
  //   const { profileAccount, getProfileAccount, loadingPage } = useAccount();
  //   console.log("loading page", loadingPage);
  //   console.log("profile user:", profileAccount);
  const selector = useSelector((state) => state.account);
  const userAccount = selector.account;
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
            <i class="fa-solid fa-location-dot ml-[12px] text-[12px]">
              {" "}
              <span className="ml-[2px] text-[12px] font-light op">
                NhaTrang, VN
              </span>
            </i>
          </div>
          {/* <div className="toolBox flex flex-row absolute bottom-2  ">
            <button className=" p-[10px] bg-blue-400 mr-2 ml-2 rounded-[10px]">
              <i class="fa-solid fa-message mr-1"></i>Send Message
            </button>
            <button className="p-[10px] bg-blue-400 mr-2 ml-2 rounded-[10px]">
              Add Contact
            </button>
            <button className="p-[10px] bg-blue-400 mr-2 ml-2 rounded-[10px]">
              Report User
            </button>
          </div> */}
          <div className="bg-img  w-full h-[80%] relative rounded-[10px]">
            <img
              src="./img/bgprofile.jpg"
              alt=""
              className=" absolute w-full h-full rounded-[10px] shadow-2xl"
            />
          </div>
        </div>

        <div className="bottom ">
          <div className="title p-[10px] border-solid border-t-[1px] relative ">
            <div className=" border-solid border-b-header border-b-[3px] w-max pb-[10px]">
              <i class="fa-solid fa-user"></i> About
            </div>
          </div>
          <div className="content flex flex-col">
            <div className=" pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
              <p className=" text-[20px] font-semibold relative text-header  ">
                Fullname:
              </p>
              <p className=" text-[18px] font-medium opacity-60 ">
                {userAccount?.fullName}
              </p>
              <i class="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
            </div>
            <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
              <p className=" text-[20px] font-semibold relative text-header ">
                Email:{" "}
              </p>
              <p className=" text-[18px] font-medium opacity-60 ">
                {userAccount?.email}
              </p>
              <i class="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
            </div>
            <div className="pt-[20px] pb-[20px]  relative border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
              <p className=" text-[20px] font-semibold  text-header">Phone: </p>
              <p className=" text-[18px] font-medium opacity-60 ">
                {userAccount?.phone}
              </p>
              <i class="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
            </div>
            <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
              <p className=" text-[20px] font-semibold  text-header">
                Gender:{""}
              </p>
              <p className=" text-[18px] font-medium opacity-60  ">Male</p>
              <i class="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
            </div>
            <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center ">
              <p className=" text-[20px] font-semibold relative text-header">
                Dob:{" "}
              </p>
              <p className=" text-[18px] font-medium opacity-60 ">dd/mm/yyyy</p>
              <i class="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
