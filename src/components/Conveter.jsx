import React, { useState } from 'react'
import CountryCard from './CountryCard'
import useConversionInfo from '../hooks/useConversion';




function Conveter() {

  const data = useConversionInfo();
  const [IAmount,setIAmount] = useState(1);
  const [ICurrency,setICurrency] = useState("inr");
  const [OCurrency,setOCurrency] = useState("eur");
  const rotateDiv = document.getElementById('rotateDiv');
  
  const swap = (e) =>{
    rotateDiv.classList.toggle('rotate-180');
    const temp = ICurrency;
    setICurrency(OCurrency);
    setOCurrency(temp);

  };

  return (
    <div className=' sm:p-4  bg-zinc-300 bg-opacity-40 border rounded-lg flex flex-col space-y-4 items-center shadow-lg'>
            
            <CountryCard amount={IAmount} setAmount={setIAmount} currency={ICurrency} setCurrency={setICurrency} currencyInfo={data}/>
            <button className=' bg-gray-400 p-1.5 md:p-4 font-bold rounded-md shadow-lg transition-transform hover:bg-gray-500 ' id="rotateDiv" onClick={swap}>SWAP</button>
            <CountryCard amount={(IAmount * data[OCurrency] / data[ICurrency] ).toFixed(4)} currency={OCurrency} setCurrency={setOCurrency} currencyInfo={data}/>

    </div>
  )
}

export default Conveter