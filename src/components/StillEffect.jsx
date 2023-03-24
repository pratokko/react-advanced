import { useState, useEffect } from "react";

const StillEffect = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // console.log('effeect hook');

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/QuincyLarson"
        );
        const user = await response.json();
        setUser(user);
        console.log(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2> there was an error</h2>;
  }

   const {avatar_url, login, company, name, bio} = user
  return (
    <div>
      <h2> fetch Data</h2>
      <img
        src={avatar_url}
        alt={login}
        style={{ borderRadius: "50%", width: "100px" }}
      />
      <h2>{name}</h2>
      <h4> works at:{company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default StillEffect;
