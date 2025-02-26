import { useState } from "react"
import Result from "./components/Result"
import TopBar from "./components/TopBar"
function App() {
  const [count,setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count +1);
  };

  const decreaseCounter = () =>{
    setCount(count - 1);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1 p-5'>

    <TopBar/>

    <Result count={count}/>

    <div className="mt-3">
      <button className="btn btn-info me-2" onClick={increaseCounter}>Increase</button>
      <button className="btn btn-dark" onClick={decreaseCounter}>Decrease</button>
    </div>
    </div>
      
  )
}

export default App
