import { useEffect, useState } from "react";
import Toggle from "./Toggle";

const EffectClean = () => {
  const [isGood, setIsGood] = useState(false);

  
  return (
    <div>
      {isGood && <Toggle />}
      <button onClick={() => setIsGood((prevState) => !prevState)}>
        toggle
      </button>
    </div>
  );
};
export default EffectClean;
