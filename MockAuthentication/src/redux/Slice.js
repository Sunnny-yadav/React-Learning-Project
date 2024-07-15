import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Register: [], // this is a object of which contain name and password of user, this array storing data for permently
  Login: [], // while login if data is persent in Register array then the data will be stored in this array
  ActiveBtn: true, //true indicates that register Btn is activated else login Btn is activated
};

export const Authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateBtn: (state, action) => {
      state.ActiveBtn = !state.ActiveBtn;
    },

    addToRegister: (state, action) => {
      const newMember = {
        name: action.payload.Name,
        password: action.payload.password,
      };

      state.Register = [...state.Register, newMember];
      alert("You have Registered Successfully");
      console.log(state.Register  )
    },

    addToLogin: (state, action) => {
      console.log("3");
      const val = state.Register.some(
        (ele) =>
          ele.name === action.payload.Name &&
          ele.password === action.payload.password
      );
      console.log(val);
      if (val) {
        const user = {
          name: action.payload.Name,
          password: action.payload.password,
        };
        state.Login = [...state.Login, user];
        // alert("login successful");
        console.log(state.Login);
      }
    },

    getItems: (state, action) => {
      state.Register = action.payload;
    },

    removeFromLogin: (state) => {
      if (state.Login.length > 0) {
        state.Login = state.Login.slice(0, -1);
      } else {
        console.log("no element in array of login section");
      }
    },
  },
});

export const {
  updateBtn,
  addToRegister,
  addToLogin,
  getItems,
  removeFromLogin,
} = Authentication.actions;

export default Authentication.reducer;
