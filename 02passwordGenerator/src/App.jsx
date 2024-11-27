import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  const Ref = useRef(null);

  let change = (e) => {
    setLength(e.target.value);
  };

  let checkNumber = () => {
    numberAllowed ? setnumberAllowed(false) : setnumberAllowed(true);
    console.log(numberAllowed);
  };

  let checkCharacter = () => {
    CharacterAllowed ? setCharacterAllowed(false) : setCharacterAllowed(true);
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
  };

  const ReloadPage = () => {
    window.location.reload();
  };

  const HigherCase = () => {
    const done = Password.toUpperCase();
    setpassword(done);
  };

  const LowerCase = () => {
    const lower = Password.toLowerCase();
    setpassword(lower);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white flex flex-col gap-6 justify-center items-center min-h-screen px-4 py-8">
        <h1 className="font-extrabold text-4xl text-center text-gray-100 font-sans">Password Generator</h1>
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-3xl p-8 flex flex-col gap-6 border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col gap-4">
            <input
              ref={Ref}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg font-medium text-gray-800 placeholder-gray-400 hover:shadow-md transition-shadow duration-200"
              type="text"
              name="Password"
              value={Password}
              placeholder="Generated Password"
              readOnly
            />
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={handleCopy} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 shadow-md transform hover:scale-105 transition-transform duration-150">Copy</button>
              <button onClick={ReloadPage} className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 shadow-md transform hover:scale-105 transition-transform duration-150">Reset</button>
              <button onClick={HigherCase} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 shadow-md transform hover:scale-105 transition-transform duration-150">To Uppercase</button>
              <button onClick={LowerCase} className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 shadow-md transform hover:scale-105 transition-transform duration-150">To Lowercase</button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4">
              <label className="text-lg font-medium text-black flex gap-2">Length <input
                type="range"
                name="range"
                onChange={change}
                min={8}
                max={20}
                value={Length}
                className="w-full"
              /> ({Length})</label>
              
            </div>
            <div className="flex mr-3 items-center gap-4">
              <label className="flex text-black items-center gap-2 text-lg font-medium">
                <input
                  type="checkbox"
                  name="check"
                  onChange={checkNumber}
                  checked={numberAllowed}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                Numbers
              </label>
              <label className="flex items-center text-black gap-2 text-lg font-medium">
                <input
                  type="checkbox"
                  name="check"
                  onChange={checkCharacter}
                  checked={CharacterAllowed}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
