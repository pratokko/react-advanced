import { useState, useEffect } from "react";

const FetchEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json();
      setUsers(users);
      console.log(users);
    };
    fetchData();
  }, []);
  return (
    <section>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          console.log(user);
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchEffect;
