import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
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
            onSelectItem(item);
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
