import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  const Ref =useRef(null)
  let change = (e) => {
    setLength(e.target.value);
  };

  let checkNumber = () => {
    numberAllowed ? setnumberAllowed(false) : setnumberAllowed(true);
    // setnumberAllowed((prev) => !prev);
    console.log(numberAllowed);
  };

  let checkCharacter = () => {
    CharacterAllowed ? setCharacterAllowed(false) : setCharacterAllowed(true)
    // setCharacterAllowed((prev) => !prev);
  };

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    console.log(str);
    if (CharacterAllowed) str += "!@#$%^&*()-_=+";

    for (let i = 1; i <= Length; i++) {
      let ran = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ran);
    }
    if (numberAllowed && !/\d/.test(pass)) {
      let randomIndex = Math.floor(Math.random() * pass.length);
      let randomdigit = Math.floor(Math.random() * 10).toString();
      pass =
        pass.substring(0, randomIndex) +
        randomdigit +
        pass.substring(randomIndex + 1);
    }

    setpassword(pass);
  }, [Length, numberAllowed, CharacterAllowed]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(Password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        alert("Failed to copy password to clipboard.");
      });
      Ref.current?.select(); 
      // ? is a optional chaining for safe navigation
      // Ref.current?.focus(); this is optional 
  };

  const ReloadPage = ()=>{
    window.location.reload();
  }
 
  const HigherCase = () =>{
  const done = Password.toUpperCase()
  setpassword(done)
  }
  return (
    <>
     <div className=" bg-gradient-to-br from-blue-500 to-transparent text-white flex flex-col gap-4 justify-center items-center h-screen">
     <h1 className="font-bold text-3xl font-serif text-black">Password Generator </h1>
     <div></div>     <div className=" black border-2 border-black bg-gradient-to-r from-blue-700 to-transparent w-fit  p-10 rounded-xl flex flex-col gap-5 justify-center items-center hover:drop-shadow-2xl hover:shadow-white">
        <div className="flex gap-3 justify-center items-center ">
          <input
            ref={Ref}
            className="bg-white border-2 rounded-lg text-orange-800 font-semibold text-xl p-2 focus:border-blue-500 hover:shadow-lg hover:shadow-blue-400"
            type="text"
            name="Password"
            value={Password}
            placeholder="Password is generated here"
            readOnly
          />
          <button onClick={handleCopy} className="bg-blue-500 font-semibold px-3 py-2 rounded-lg hover:text-black hover:bg-blue-400">
            Copy
          </button>
          <button onClick={ReloadPage} className="bg-blue-500 font-semibold px-3 py-2 rounded-lg hover:text-black hover:bg-blue-400">Reset</button>
          <button onClick={HigherCase} className="bg-blue-500 font-semibold px-3 py-2 rounded-lg hover:text-black hover:bg-blue-400">ToUppercase</button>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <input
              type="range"
              name="range"
              onChange={change}
              min={8}
              max={20}
              value={Length}
            />
            <span className="text-xl text-gray-900 font-semibold">Length&nbsp;({Length})</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              name="check"
              onChange={checkNumber}
              defaultChecked={numberAllowed}
            />
            <span className="text-xl text-gray-900 font-semibold">Numbers</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              name="check"
              onChange={checkCharacter}
              defaultChecked={CharacterAllowed}
            />
            <span className="text-xl text-gray-900 font-semibold">Characters</span>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;
