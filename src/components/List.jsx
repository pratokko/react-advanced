import { people } from "../data";

const List = () => {
  const peopleList = people.map((person) => <h2 key={person.id}>{person.name}</h2>);
  return <div>{peopleList}</div>;
};
export default List;
