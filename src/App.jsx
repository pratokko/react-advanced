import { useState } from "react";
import StateFunction from "./components/StateFunction";
// import StateObject from "./components/StateObject";
// import StateArray from "./components/StateArray";

function App() {
  const [count, setCount] = useState(0);
  console.log(useState());

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount((prevCount) => prevCount + 1)} className='btn'>
        add
      </button>
      {/* <StateArray /> */}
      {/* <StateObject /> */}
      <StateFunction />
    </>
  );
}

export default App;
