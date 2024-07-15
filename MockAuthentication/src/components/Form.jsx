import React, { useState } from "react";
import { useSelector } from "react-redux";
import Btn from "./Btn";

function Form() {
  const [visibility, setvisibility] = useState(true); // true means the password field is activated
  const [userName, setUsername] = useState("");
  const [PassWord, setPassword] = useState("");

  const RememberPassword = useSelector((state) => state.ActiveBtn);

  const visibilityHandeller = () => {
    setvisibility(!visibility);
  };

  return (
    <>
      <form action="">
        <div className="flex items-center justify-center gap-7 flex-col">
          <input
            className="border-b-2 border-b-gray-400 outline-none w-[350px] bg-gray-50  text-black  font-semibold placeholder: pb-3 "
            placeholder="User Name"
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative">
            <input
              className="border-b-2  border-b-gray-400 outline-none w-[350px] text-black bg-gray-50  font-semibold placeholder: pb-3"
              placeholder="User PassWord"
              type={visibility ? "password" : "text"}
              value={PassWord}
              onChange={(e) => setPassword(e.target.value)}
            />
            {visibility ? (
              <span
                className="material-symbols-outlined  absolute right-2 cursor-pointer"
                onClick={PassWord && visibilityHandeller}
              >
                visibility_off
              </span>
            ) : (
              <span
                className="material-symbols-outlined absolute right-2 cursor-pointer"
                onClick={visibilityHandeller}
              >
                visibility
              </span>
            )}
          </div>
        </div>
        {RememberPassword ? (
          <div className="flex gap-4 mt-7 font-semibold text-gray-400 justify-start items-center">
            <input type="checkbox" />
            <span>Remember Password</span>
          </div>
        ) : (
          ""
        )}
      </form>

      <div className=" text-center mt-7  w-[80%] mx-auto mb-[70px]">
        <Btn
          PassWord={PassWord}
          userName={userName}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </div>
    </>
  );
}

export default Form;
