import { useId, useState } from "react";
export default function Inputbox({
    label, //label declare whether it is To or Frok
    amount, // declares the value of amount in From box that 
    Currency, //this is default value displayed in select tag
    setAmount, //use to access setAmount function as a prop from app.jsx and use to change the state
    setCurrency, // use to access the setFrom and setTo to change the value of from and to variable
    currencyOption=[] // it contains the array of keys which is made to appear dynamically in option tag

}) {
    const uniqueId=useId();
    // const [currency2,setcurrency2]=useState(Currency)
    
   
    return (
        <>
            <div className="flex flex-col gap-3 w-[30vw] px-3 py-4 bg-white rounded-xl mb-3 ">
                <div className="flex justify-between items-center gap">
                    <label htmlFor={uniqueId} className="font-semibold text-gray-400 ">{label}</label>
                    <label  className="font-semibold text-gray-400 ">Currency Type</label>
                </div>
                <div className="flex justify-between items-center gap">
                    <input
                        id={uniqueId}
                        type="number"
                        name="Amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}

                    />
                    <select
                       
                        className="bg-gray-200 font-semibold text-black p-1 rounded-md pr-5 "
                        name="country"
                        value={Currency}
                        onChange={(e) => setCurrency(e.target.value)} >
                        
                        {
                            currencyOption.map((val)=>(
                                <option key={val} value={val}>{val.toUpperCase()}</option> 
                                // the value attribute of option tag should always have the original value of Api because this is going to be used to perform various operations for fetching other data from the api and if the key of the used api will not work than it will cause unexpected error and it will be difficult to trace..as shown here.......and on otherside for displaying it you can do any thing as here it is converted in uppercase
                            ))
                        }

                    {/* In the above map function you may see that we had used the () bracket instead of {} ,this indicate that the line inside the function will be returned implicity i.e no need to write the return keyword....its necessary only in the {} situation ..you should use {} if the funciton consist of additinal logic */}
                       
                    </select>
                </div>
            </div>
        </>
    );
}
