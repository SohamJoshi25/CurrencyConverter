import React from 'react'


function CountryCard({
  amount,
  setAmount = null,
  currency,
  setCurrency,
  currencyInfo,
  }){ 

  return (
    <div className=' text-l md:text-2xl sm:text-xl p-1 sm:p-2 bg-white bg-opacity-30 flex flex-row shadow-lg'>
        
        <div className='p-2 '>
          <label className='block ' htmlFor="amount"> {setAmount==null?"Converted":"Enter"} Amount</label>
          <input className='p-1 sm:p-2 md:p-3  mt-2 bg-slate-300 rounded-md shadow-sm' placeholder='0.0000' type="number" id='amount'  value={amount} onChange={(e)=>{
            if(e.target.value>=0)
              setAmount(e.target.value)
          }}/>
        </div>

        <div className='p-2 align-items'>
          <label htmlFor="country" className='block'>Currency</label>

          <select className='p-1 sm:p-2 md:p-3 mt-2 float-right shadow-sm  bg-slate-300 rounded-md ' name="Country" id="country" value={currency} onChange={(e)=>{
            setCurrency(e.target.value);
            this.size=1;
          }
          }>  
            {
              Object.entries(currencyInfo).map(([key, value],index) => {
                return (
                  <option className='hover:bg-amber-900 bg-opacity-25 ' key={index} value={key}>{key.toUpperCase()}
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