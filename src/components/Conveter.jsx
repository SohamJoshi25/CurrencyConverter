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
    <div className='m-6 p-6 bg-blue-100 rounded-lg flex flex-col space-y-4 items-center shadow-lg'>
            
            <CountryCard amount={IAmount} setAmount={setIAmount} currency={ICurrency} setCurrency={setICurrency} currencyInfo={data}/>
            <button className='bg-slate-300 text-l md:text-2xl sm:text-xl px-3 py-2 font-bold rounded-md shadow-lg hover:bg-slate-400 transition-transform ' id="rotateDiv" onClick={swap}>SWAP</button>
            <CountryCard amount={(IAmount * data[OCurrency] / data[ICurrency] ).toFixed(4)} currency={OCurrency} setCurrency={setOCurrency} currencyInfo={data}/>

    </div>
  )
}

export default Conveter