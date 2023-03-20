import React from "react";

const About = (props) => {
  return (
    <div className="content flex flex-col">
      <div className=" pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
        <p className=" text-[20px] font-semibold relative text-header  ">
          Fullname:
        </p>
        <p className=" text-[18px] font-medium opacity-60 ">
          {props.dataUserAccount?.fullName}
        </p>
        {/* <input
                type="text"
                className="text-[18px] font-medium opacity-60"
                
                disabled
                placeholder={userAccount?.fullName}
              /> */}
        <i className="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
      </div>
      <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
        <p className=" text-[20px] font-semibold relative text-header ">
          Email:{" "}
        </p>
        <p className=" text-[18px] font-medium opacity-60 ">
          {props.dataUserAccount?.email}
        </p>
        <i className="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
      </div>
      <div className="pt-[20px] pb-[20px]  relative border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
        <p className=" text-[20px] font-semibold  text-header">Phone: </p>
        <p className=" text-[18px] font-medium opacity-60 ">
          {props.dataUserAccount?.phone}
        </p>
        <i className="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
      </div>
      <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
        <p className=" text-[20px] font-semibold  text-header">Gender:{""}</p>
        <p className=" text-[18px] font-medium opacity-60  ">Male</p>
        <i className="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
      </div>
      <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center ">
        <p className=" text-[20px] font-semibold relative text-header">Dob: </p>
        <p className=" text-[18px] font-medium opacity-60 ">dd/mm/yyyy</p>
        <i className="fa-solid fa-pencil absolute right-0 translate-y-[-50%] top-[50%] cursor-pointer hover:text-red-500"></i>
      </div>
    </div>
  );
};

export default About;
