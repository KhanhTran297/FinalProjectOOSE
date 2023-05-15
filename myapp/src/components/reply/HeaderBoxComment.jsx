import useClickOutSide from '@/hook/useClickOutSide';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Report from '../Modal/Report';
import { useState } from 'react';
import { Modal } from 'antd';

const HeaderBoxComment = (props) => {
    const selectorAccount = useSelector((state) => state.account);
    const userAccount = selectorAccount.account;
    const {show,setShow,nodeRef} = useClickOutSide();
    const [showReport, setShowReport] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
      
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <Fragment>
            <div className="relative z-0">
                <Report
                open={showReport}
                handleClose={() => setShowReport(false)}
                />
            </div>
            <div className=" h-full    bg-gray-200  rounded-full solid mr-1 ">
                <div className='flex'>
                    <a href="">
                    <img src={props.avatar} alt="" className="rounded-full w-9 h-9" />
                    </a>
                    <span className="pl-3 mb-3 #0f172a">
                        <a href="">
                        <b>{props.fullname}</b>
                        </a>
                    </span>
                </div>
                {/* <div className="items-center float-right w-[10%] " ref={nodeRef} >
                    <div>
                        <button onClick={() => setShow(!show)}>
                            <svg
                                fill="#000000"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g data-name="Layer 2">
                                    {" "}
                                    <g data-name="more-vertical">
                                    {" "}
                                    <rect
                                        width="24"
                                        height="24"
                                        transform="rotate(-90 12 12)"
                                        opacity="0"
                                    ></rect>{" "}
                                    <circle cx="12" cy="12" r="2"></circle>{" "}
                                    <circle cx="12" cy="5" r="2"></circle>{" "}
                                    <circle cx="12" cy="19" r="2"></circle>{" "}
                                    </g>{" "}
                                </g>{" "}
                                </g>
                            </svg>
                        </button>
                        { show && (userAccount.userEmail !== props.email ) && (
                            <div className="absolute w-25 h-22 z-10 translate-x-0 translate-y-2 bg-white border   shadow-lg ">
                                <button
                                className="w-full h-8 block border  border-solid cursor-pointer text-left pl-1 pr-1"
                                onClick={() => setShowReport(true)}
                                >
                                Report
                                </button>
                            
                            </div>
                        )}
                        { show && (userAccount.userEmail === props.email ) && (
                            <div type="primary" className="absolute w-25 h-22 z-10 translate-x-0 translate-y-2 bg-white border   shadow-lg ">
                                <button
                                className="w-full h-8 block border  border-solid cursor-pointer text-left pl-1 pr-1"
                                >
                                Edit
                                </button>
                                
                                <button  className="w-full h-8  border border-t-1 border-solid cursor-pointer text-left pl-1 pr-1 flex " onClick={showModal} >
                                Delete
                                </button>
                                <Modal
                                title="Confirm delete"
                                open={isModalVisible}
                                onCancel={handleCancel}
                                okText="Delete"
                                okType= 'danger'
                                >
                                <p>Are you sure you want to delete this post??</p>
                                </Modal>
                            </div>

                        )}
                        {!show &&  (
                            ""
                        )}
                    </div> */}
                {/* </div> */}

        </div>
        </Fragment>
    );
};

export default HeaderBoxComment;