import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToLogin } from "./Slice";

const loginUser = createAsyncThunk(
  "auth/loginUser", //(i.e., sliceName/actionName)

  async (userCredentials, { dispatch, getState }) => {
    // Dispatch addToLogin
    console.log("2");
    dispatch(addToLogin(userCredentials));
    console.log("4");
    // Check if login was successful
    const state = getState(); //as while configurin the store i have not used any key for giving the state of my slice it is directly wrote i.e reducer: authRducers so getState() is written like this else it should be written as getstate().key_name
    const userExists = state.Register.some(
      (user) =>
        user.name === userCredentials.Name &&
        user.password === userCredentials.password
    );

    if (userExists) {
      return { success: true, user: userCredentials.Name };
    } else {
      throw new Error(
        "The username doesn't exist! or Your Password must be wrong"
      );
    }
  }
);

export default loginUser;

// https://chatgpt.com/share/e413a27a-c2fe-4f0f-bf7d-0cfd225a11d2 this chat link will explain the use of unwrap() with respect ot redux-thunk
