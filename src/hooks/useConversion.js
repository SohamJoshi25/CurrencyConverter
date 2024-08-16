import { useEffect,useState } from "react"


export default function useConversionInfo() {

  const [conversionInfo, setConversionInfo] = useState({});

  useEffect(()=>{
    fetch("https://latest.currency-api.pages.dev/v1/currencies/inr.json")
      .then((res)=>res.json())
      .then((res)=>{
        setConversionInfo(res.inr)
        console.log(res.inr)
      })

  },[]);
  return (conversionInfo);
}
