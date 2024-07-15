import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { updateBtn } from "../redux/Slice";
import { useDispatch } from "react-redux";
function Layout() {
  const [disabled, setdisabled] = useState(false);
  const dispatch = useDispatch();

  const BtnState = (e) => {
    setdisabled(true);
    dispatch(updateBtn());
    // settimeout is used here for disabling the btn from double click for 5 sec so that no one can click it 2 time between this 5 sec
    setTimeout(() => {
      setdisabled(false);
    }, 5000);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url(https://wallpaperaccess.com/full/1638235.jpg)] bg-cover bg-center ">
        <div className="absolute top-8 flex justify-center mt-5 ">
          <h2 className="text-2xl font-serif font-bold text-black bg-white shadow-lg shadow-black p-2 rounded-full hover:bg-gradient-to-br from-[#860E76] to-[white]">
            MockAuthentication
          </h2>
        </div>
        <div className="bg-gray-50 px-10 py-8 rounded-2xl flex flex-col justify-center items-center gap-10  ">
          <div className="w-fit bg-[#ffffff] rounded-full py-2 ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-[#ff1b59] to-[#ff8b1a]  "
                    : ""
                }   w-fit px-4 rounded-full  py-2 font-semibold `
              }
            >
              <button onClick={(e) => BtnState(e)} disabled={disabled}>
                Register
              </button>
            </NavLink>

            <NavLink
              to={"/Login"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-[#ff1b59] to-[#ff8b1a] "
                    : ""
                }  w-fit px-5 rounded-full  py-2 font-semibold `
              }
            >
              <button onClick={BtnState} disabled={disabled}>
                Log In
              </button>
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
