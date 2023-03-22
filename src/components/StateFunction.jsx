import { useState } from "react";

const StateFunction = () => {
  const [func, setFunc] = useState(16);

  const increase = () => {
    setFunc((prevState) => prevState + 1);
  };
  return (
    <div>
         <h2>{func}</h2>
      <button onClick={increase}>increase</button>
    </div>
  );
};
export default StateFunction;
