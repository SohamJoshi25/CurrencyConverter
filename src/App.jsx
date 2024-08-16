import Conveter from  "./components/Conveter.jsx"
import './App.css'


function App() {
  return (
    <div className="flex flex-col items-center bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] justify-center h-screen">
      <h1 className=" text-3xl md:text-6xl sm:text-5xl font-bold p-4 rounded-md shadow-xl text-slate-800 bg-slate-300">Currency Converter</h1>
      <Conveter></Conveter>
    </div>
  )
}

export default App
 