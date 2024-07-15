import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToRegister, getItems } from "../redux/Slice";
import { useNavigate } from "react-router-dom";
import loginUser from "../redux/Thunk";

function Btn({ PassWord, userName, setPassword, setUsername }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BtnState = useSelector((state) => state.ActiveBtn);
  const Entries = useSelector((state) => state.Register);

  useEffect(() => {
    const RegisterEntries = JSON.parse(localStorage.getItem("Register")) || [];
    if (RegisterEntries) {
      dispatch(getItems(RegisterEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Register", JSON.stringify(Entries));
  }, [Entries]);

  const addToRegisterArray = (e) => {
    e.preventDefault();
    for (let entry of Entries) {
      if (userName === entry.name) {
        alert(" Username Already Exist!! , enter differnt username");
        setPassword("");
        setUsername("");
        return;
      }
    }
    dispatch(addToRegister({ Name: userName, password: PassWord }));
    setPassword("");
    setUsername("");
  };

  const addToLoginArray = async (e) => {
    e.preventDefault();
    try {
      console.log("1");
      const result = await dispatch(
        loginUser({ Name: userName, password: PassWord })
      ).unwrap();
      // console.log("last")
      console.log(result);
      if (result.success) {
        setPassword("");
        setUsername("");
        navigate("AfterLogin");
      }
    } catch (error) {
      setPassword("");
      setUsername("");
      alert(error.message);
    }
  };

  // const addToLoginArray = (e) => {
  //   e.preventDefault();
  //   dispatch(addToLogin({ Name: userName, password: PassWord }));
  //   setPassword("");
  //   setUsername("");
  // };

  return (
    <>
      {BtnState ? (
        <button
          onClick={(e) => userName && PassWord && addToRegisterArray(e)}
          className=" font-semibold bg-gradient-to-r from-[#ff1b59] to-[#ff8b1a] py-2 rounded-full w-full "
        >
          Register
        </button>
      ) : (
        <button
          onClick={(e) => userName && PassWord && addToLoginArray(e)}
          className=" font-semibold bg-gradient-to-r from-[#ff1b59] to-[#ff8b1a] py-2 rounded-full w-full "
        >
          Login
        </button>
      )}
    </>
  );
}

export default Btn;
