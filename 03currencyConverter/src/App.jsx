import { useId, useState } from "react";
import "./App.css";
import Inputbox from "./components/InputBox";
import bgImage from "./assets/bg.jpg";
import useFetch from "./CustomHook/useFetch";

function App() {
  const [Amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd"); //here the default value passed should be present in the option list passed to select tag and remembet it should be as same as the value attribute of the option tag else error wil be seen
  const [To, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);


  const currencyObj = useFetch(From);
  const options = Object.keys(currencyObj)

  const swap = () => {
    setFrom(To)
    setTo(From)
    setAmount(convertedAmt)
    setConvertedAmt(Amount)
  }

  const convert = () => {
    setConvertedAmt(Amount * currencyObj[To])
  }

  const Reset = ()=>{
    setAmount(0);
    setConvertedAmt(0);
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-full h-screen flex items-center flex-col justify-center bg-no-repeat bg-center bg-cover"
      >
        <h1 className="text-purple-900 text-4xl font-bold mb-5 uppercase font-serif bg-white p-2 rounded-xl shadow-lg shadow-black">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();

          }}
        >
          <div className="container w-fit  bg-gray-600 p-5 rounded-xl backdrop-blur-md bg-opacity-5 border-gray-100 border-2 hover:shadow-2xl hover:shadow-slate-900 duration-200">
            <Inputbox

              label="From"
              amount={Amount}
              Currency={From}
              setAmount={setAmount}
              setCurrency={setFrom}
              currencyOption={options}


            />
            <button
              className="bg-blue-800 px-4 rounded-xl w-fit  py-1 absolute inset-x-[42%]  bottom-[59%] text-white font-semibold  border-3 border-gray-400 hover:bg-blue-600"
              onClick={swap}
            >
              Swap
            </button>
            <Inputbox

              label="to"
              amount={convertedAmt}
              Currency={To}
              setAmount={() => { }}
              setCurrency={setTo}
              currencyOption={options}


            />
            <div className="flex flex-col gap-2">
            <button
              className="bg-blue-800 px-4 rounded-xl w-[30vw]  py-2  text-white font-semibold  border-3 border-gray-400 hover:bg-blue-600"
              onClick={convert}
            >
              Convert {From.toUpperCase()} to {To.toUpperCase()}
            </button>
            <button
              className="bg-blue-800 px-4 rounded-xl w-fit  py-2 mx-auto  text-white font-semibold  border-3 border-gray-400 hover:bg-blue-600"
              onClick={Reset}
            >Reset</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
