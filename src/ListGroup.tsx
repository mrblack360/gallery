import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ul className="list-group" key="list">
      <h2>{heading}</h2>
      {items.map((item, index) => (
        <li
          className={
            selectedIndex == index
              ? "list-group-item active "
              : "list-group-item"
          }
          onClick={() => {
            console.log(item);
            setSelectedIndex(index);
          }}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
export default ListGroup;
