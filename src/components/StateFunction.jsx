import { useState } from "react";

const StateFunction = () => {
  const [func, setFunc] = useState(0);

  const increase = () => {
    setTimeout(() => {
      setFunc((prevState) => prevState + 1);
    }, 3000);
  };
  return (
    <div>
      <h2>{func}</h2>
      <button onClick={increase}>increase</button>
    </div>
  );
};
export default StateFunction;
