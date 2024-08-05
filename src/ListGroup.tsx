import { useState } from "react";

function ListGroup() {
  const cities = ["Dar", "Morogoro", "Dodoma", "Iringa"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ul className="list-group" key="list">
      <h2>List</h2>
      {cities.map((city, index) => (
        <li
          className={
            selectedIndex == index
              ? "list-group-item active "
              : "list-group-item"
          }
          onClick={() => {
            console.log(city);
            setSelectedIndex(index);
          }}
          key={city}
        >
          {city}
        </li>
      ))}
    </ul>
  );
}
export default ListGroup;
