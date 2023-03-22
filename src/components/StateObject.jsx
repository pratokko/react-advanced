import { useState } from "react";

const StateObject = () => {
  const [person, setPerson] = useState({
    name: "Heivans",
    age: 23,
    hobby: "code",
  });

  const update = () => {
    setPerson((prevState) => ({
      ...prevState,
      name: "Yuddy",
      age: 21,
    //   hobby: "running",
    }));
  };

  const { name, age, hobby } = person;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
      <button onClick={update}>update</button>
    </div>
  );
};
export default StateObject;
