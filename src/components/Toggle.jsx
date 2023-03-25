import Mouseover from "./Mouseover";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggleM = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div>
      {toggle && <Mouseover />}
      <button onClick={toggleM}>toggle</button>
    </div>
  );
};
export default Toggle;
