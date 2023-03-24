import { useState, useEffect } from "react";

const BasicEffect = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(prevValue => prevValue + 1)

  }

  const sayHello = () => {
    console.log('hello');
  }
 

  sayHello()
  useEffect(() => {
    console.log('useEffect says hello');

  },[])

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};
export default BasicEffect;
