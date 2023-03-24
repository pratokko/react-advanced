import { useState } from "react";

const Conditions = () => {
  const [isGood, setIsGood] = useState(false);
  const [name, setName] = useState("Heivans");

 
  return <div>

    <h4>{isGood || 'wewe bwana'}</h4>
    <h4> {isGood && 'wewe baaaana'}</h4>
    <h4> {name || 'wewe bana'}</h4>
    <h4> {name && 'wewe bana'}</h4>

    
  </div>;
};
export default Conditions;
