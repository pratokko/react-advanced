import { useState, useEffect } from "react";

const BasicConditions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading((prevState) => !prevState);
    }, 3000)
  }, [isLoading]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <div> lets do this men</div>;
};
export default BasicConditions;
