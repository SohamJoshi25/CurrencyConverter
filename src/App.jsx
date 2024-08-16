import Conveter from  "./components/Conveter.jsx"
import './App.css'


function App() {
  return (
    <div className=" 2xs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl flex flex-col space-y-12 justify-center items-center backdrop-brightness-200 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] h-screen">
      <h1 className="font-bold p-4 rounded-md shadow-2xl text-slate-800 bg-slate-300 block w-full text-center">Currency Converter</h1>
      <Conveter></Conveter>
    </div>
  )
}

export default App
 