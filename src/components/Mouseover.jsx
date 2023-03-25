import { useEffect, useState } from "react";

const Mouseover = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  useEffect(() => {
    console.log("effect hook");
    const handleMouse = (e) => {
      setX(e.clientX);
      setY(e.clientY);

      console.log(x, y);
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
        window.removeEventListener('mousemove', handleMouse)
    }
  }, []);
  return (
    <div>
      <h2>x: {x}</h2>
      <h2> y: {y}</h2>
    </div>
  );
};
export default Mouseover;
