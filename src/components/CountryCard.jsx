import React from 'react'


function CountryCard({
  amount,
  setAmount = null,
  currency,
  setCurrency,
  currencyInfo,
  }){ 

  return (
    <div className=' p-1  xl:p-8  font-semibold sm:p-4  bg-slate-500 flex rounded-md flex-row shadow-lg'>
        
        <div className='p-1 md:p-2 xl:p-4  flex flex-col space-y-3'>
          <label className='block ' htmlFor="amount"> {setAmount==null?"Converted":"Enter"} Amount</label>
          <input className='p-1  xl:p-3  bg-slate-300 rounded-md shadow-sm' placeholder='0.0000' type="number" id='amount'  value={amount} onChange={(e)=>{
            if(e.target.value>=0)
              setAmount(e.target.value)
          }}/>
        </div>

        <div className='align-items p-1 md:p-2 xl:p-4  md:px-6  flex flex-col  space-y-3'>
          <label htmlFor="country"  className='block text-right'>Currency</label>

          <select className='shadow-sm h-full  xl:p-2  bg-slate-300 rounded-md text-center ' name="Country" id="country" value={currency} onChange={(e)=>{
            setCurrency(e.target.value);
            this.size=1;
          }
          }>  
            {
              Object.entries(currencyInfo).map(([key, value],index) => {
                return (
                  <option  key={index} value={key}>{key.toUpperCase()}
                  </option>
                );
              })
            }
          </select>
        </div>
      
    </div>
  )
}

export default CountryCard;