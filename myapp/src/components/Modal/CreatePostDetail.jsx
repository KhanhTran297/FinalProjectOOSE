import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import EditorText from "../common/EditorText";
import { Button } from "antd";

const CreatePostDetail = ({ open = false, handleClose = () => {} }) => {
  const [auth, setAuth] = useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  if (typeof document === "undefined")
    return <div className="createpostdetal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 createpostdetal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 w-full bg-white mb-5 modal-content max-w-[550px] h-[500px]">
        <div className=" w-[550px] h-[78px]  bg-slate-200 border border-3 border-solid border-gray-400">
          <div>
            <div className="pt-3  pl-6 pr-6 flex ">
              <span className="w-full text-lg font-medium  text-blue-500">
                Create a post to share
              </span>
              <span
                className="absolute top-8 right-8 flex items-center justify-center w-10 h-10 p-1  cursor-pointer -translate-y-2/4 translate-x-2/4
                "
                onClick={handleClose}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                    fill="#84878B"
                  />
                </svg>
              </span>
              
            </div>
          </div>
          <div className="w-full  flex relative mt-14 ml-2 z-0">
            <a
              href=""
              className="w-8 h-8 border-[1px] ml-3 mr-3 border-solid border-blueborder rounded-full"
            >
              <span className="overflow-hidden relative block">
                <span className="pb-[100%] rounded-full"></span>
                <img
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/306957382_1505431323240193_3567589334715023953_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=Ky_nZwTBR5UAX_IJGIG&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCm6yOz_jwmqGC3qp_L4nJuzn3PT1FDBJ9ZF9st3ISXOg&oe=64147BE2"
                  alt=""
                  className="rounded-full"
                />
              </span>
            </a>

            <span className="text-base font-semibold">Peter Pan</span>
          </div>
          <form action="">
            <div className="block ">
              <input
                placeholder="Title "
                className="h-[45px] m-5 ml-[5%] mb-3 w-[90%] border-2 rounded-lg p-2 overflow-scroll font-semibold uppercase"
              ></input>
            </div>
            <div className="block w-[90%] ml-[5%]">
              <EditorText />
            </div>
            <div className="ml-[5%] mt-3 w-[90%]">
              <Button
                loading={loadings[0]}
                onClick={() => enterLoading(0)}
                className="w-full text-white bg-blueborder"
              >
                UPLOAD
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default CreatePostDetail;
