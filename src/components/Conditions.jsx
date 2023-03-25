import { useState } from "react";

const Conditions = () => {
  const [isGood, setIsGood] = useState(false);
  const [name, setName] = useState("Heivans");

  const identity = name || "nameless";

  return (
    <div>
      <h4>{isGood || "wewe bwana"}</h4>
      <h4> {isGood && "wewe baaaana"}</h4>
      <h4> {name || "wewe bana"}</h4>
      <h4> {name && "wewe bana"}</h4>
      <h2>{identity}</h2>
    </div>
  );
};
export default Conditions;
