import React, { useEffect, useState } from "react";
import useFetch from "../customHook/Fetch";
import { useDispatch } from "react-redux";
import { removeFromLogin } from "../redux/Slice";
import { useNavigate } from "react-router-dom";
function Afterlogin() {
  const [updatemsg, setupdatemsg] = useState(true);
  const { msg, writter } = useFetch(updatemsg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // fetch('https://type.fit/api/quotes').then((obj)=> obj.json()).then((obj)=> {
  //   const vla = obj.map((ele)=>ele.text)
  //   console.log(vla.length)

  // })
  const update = () => {
    setupdatemsg(!updatemsg);
  };

  const removeFromLoginArray = () => {
    dispatch(removeFromLogin());
    navigate("/"); // the root layout is already present in you route so no need to create a new route ....suppose you want to go on another page that is not present in route then you need to create a route for that page in existin router and remember if new route is created then the path should be given on basis of existing url because the url of first route will not change for this navigation........for clear understandin g of this statement see how AfterLogin was rendered using navigate()
  };
  return (
    <>
      <div className="bg-[#860E76] w-full min-h-screen flex justify-center items-center flex-col gap-5">
        <div className="absolute  top-4 right-8">
          <button
            onClick={removeFromLoginArray}
            className="text-lg font-semibold font-serif bg-white text-black p-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Sign Out
          </button>
        </div>
        <div>
          <h1 className="font-bold text-xl font-serif text-white">
            Thought For the Day
          </h1>
        </div>
        <div className="text-[#860E76]  font-serif  text-wrap w-[30%] bg-white  rounded-xl py-2 pl-8 pr-1 flex flex-col gap-4">
          <div className="flex gap-4">
            <div>
              <svg
                width={30}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                className="svg-inline--fa fa-quote-left icon__quote text-[#860E76]"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                ></path>
              </svg>
            </div>
            <div className="mt-3 ">{msg}</div>
          </div>

          <div className="flex flex-col items-end pr-4">
            <div className="text-xl text-[#860E76] font-bold ">
              &#8211;{writter}
            </div>
            <div>
              <button
                onClick={update}
                className="text-white px-3 py-1 w-fit rounded-full bg-[#860E76]"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Afterlogin;
