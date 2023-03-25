import { useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Evans" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>welcome {user.name}</h4>
          <button className="btn" onClick={logout}>
            loguot
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
export default User;
