import React from "react";
import NewestUpdateMainPost from "./NewestUpdateMainPost";
import NewestUpdatePost from "./NewestUpdatePost";
const NewestUpdate = () => {
  return (
    <div id="newestUpdate" className="grid grid-rows-[10%_90%] min-h-[1000px]">
      <div className="titleNewestUpdate text-[#3a1097] text-[28px] leading-9 font-semibold mt-[20px] mb-[20px] mr-[11px] ml-[11px] before:contents[''] before:absolute before:w-[50px] before:border-solid before:border-border_title before:border-t-[3px] ">
        Newest Update
      </div>
      <div className="postWrap grid grid-rows-[60%_40%]">
        <div className="topBoxContainer grid grid-cols-[auto_auto] ">
          {/* <div className="leftContainer pr-[10px] grid">
            <div className="imgBox">
              <img
                src="./img/newest/top/left/post1.jpg"
                alt=""
                className="imgPost"
              />
            </div>
            <div className="postContentContainer">
              <div className="categoryPost">
                <p>Kiến thức</p>
              </div>
              <div className="postContent">
                <div className="content">
                  <p>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                  </p>
                </div>
                <div className="date_actor">
                  <p>Mac 23</p>
                  <i className="fa-solid fa-circle"></i>
                  <p>Andiez Le</p>
                </div>
              </div>
            </div>
          </div> */}
          <NewestUpdateMainPost url="./img/newest/top/left/post1.jpg"></NewestUpdateMainPost>
          {/* <NewestUpdatePost url="./img/cat.jfif"></NewestUpdatePost> */}
          <div className="rightContainer flex flex-col overflow-y-scroll bg-rightBox rounded-[10px] pl-[10px] pr-[10px] h-[500px] ">
            <NewestUpdatePost
              url="./img/duck.jpg"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/cat.jfif"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/oldcomputer.jfif"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/newest/top/right/post3.jpg"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/Internet Computer Technology.jfif"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/Keyboard Computer Office Business Background.jfif"
              position="right"
            ></NewestUpdatePost>
          </div>
        </div>
        <div className="bottomboxContainer flex flex-row justify-between ">
          {/* <div className="item">
            <div className="imgBox">
              <img
                src="./img/newest/bottom/post1.jpg"
                alt=""
                className="imgPost"
              />
            </div>
            <div className="postContentContainer">
              <div className="categoryPost">
                <p>Kiến thức</p>
              </div>
              <div className="postContent">
                <div className="content">
                  <p>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                  </p>
                </div>
                <div className="date_actor">
                  <p>Mac 23</p>
                  <i className="fa-solid fa-circle"></i>
                  <p>Andiez Le</p>
                </div>
              </div>
            </div>
          </div> */}
          <NewestUpdatePost url="./img/newest/bottom/post1.jpg"></NewestUpdatePost>
          <NewestUpdatePost url="./img/newest/bottom/post2.jpg"></NewestUpdatePost>
          <NewestUpdatePost url="./img/newest/bottom/post3.jpg"></NewestUpdatePost>
          <NewestUpdatePost url="./img/newest/bottom/post4.jpg"></NewestUpdatePost>
          {/* <div className="item">
            <div className="imgBox">
              <img
                src="./img/newest/bottom/post2.jpg"
                alt=""
                className="imgPost"
              />
            </div>
            <div className="postContentContainer">
              <div className="categoryPost">
                <p>Kiến thức</p>
              </div>
              <div className="postContent">
                <div className="content">
                  <p>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                  </p>
                </div>
                <div className="date_actor">
                  <p>Mac 23</p>
                  <i className="fa-solid fa-circle"></i>
                  <p>Andiez Le</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="item">
            <div className="imgBox">
              <img
                src="./img/newest/bottom/post3.jpg"
                alt=""
                className="imgPost"
              />
            </div>
            <div className="postContentContainer">
              <div className="categoryPost">
                <p>Kiến thức</p>
              </div>
              <div className="postContent">
                <div className="content">
                  <p>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                  </p>
                </div>
                <div className="date_actor">
                  <p>Mac 23</p>
                  <i className="fa-solid fa-circle"></i>
                  <p>Andiez Le</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="item">
            <div className="imgBox">
              <img
                src="./img/newest/bottom/post4.jpg"
                alt=""
                className="imgPost"
              />
            </div>
            <div className="postContentContainer">
              <div className="categoryPost">
                <p>Kiến thức</p>
              </div>
              <div className="postContent">
                <div className="content">
                  <p>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                  </p>
                </div>
                <div className="date_actor">
                  <p>Mac 23</p>
                  <i className="fa-solid fa-circle"></i>
                  <p>Andiez Le</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewestUpdate;
