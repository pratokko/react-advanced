import { useState } from "react";

import { data } from "../data";

const StateArray = () => {
  const [people, setPeople] = useState(data);

  const clear = () => {
    setPeople([]);
  };

  const remove = (id) => {
    console.log(id);
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => remove(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={clear}>
        {" "}
        clear
      </button>
    </div>
  );
};
export default StateArray;
