import { useState, useEffect, useRef } from "react";

import { data } from "../data";

const frameWorks = ["react", "vue", "Agular", "svelt"];

const Form = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const [framework, setFrameWork] = useState("react");

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("effect hook at work");
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const select = (e) => {
    setFrameWork(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const fakeId = Date.now();

    const newuser = { id: fakeId, name };

    const updateUser = [...users, newuser];

    if (!name) return;
    setUsers(updateUser);
    setName("");
    console.log(name, framework);
  };

  const remove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const clear = () => {
    setUsers([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="framework">choose</label>
        <select id="framework" value={framework} onChange={select}>
          {frameWorks.map((framework) => {
            return <option key={framework}>{framework}</option>;
          })}
        </select>
        <button>submit</button>
      </form>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <button onClick={() => remove(user.id)}>remove</button>
          </div>
        );
      })}
      <button onClick={clear}>clear list</button>
    </div>
  );
};
export default Form;
