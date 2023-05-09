import React from "react";
import useClickOutSide from "@/hook/useClickOutSide";

const AdminHeader = () => {
    const {show,setShow,nodeRef} = useClickOutSide();
    return (
        <div className="bg-slate-100 h-16 p-5 border-b-[1px] border-solid border-[#eee] justify-between  ">
            <div className="w-full">
                <div className="userBox left-[90%] relative" ref={nodeRef}>
                    <i
                    className="fa-regular fa-user hover:text-red-600 cursor-pointer mr-6 text-[18px]"
                    onClick={() => setShow(!show)}
                    ></i>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
