import ListGroup from "./ListGroup";
import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
      <ListGroup
        items={["Dar", "Morogoro", "Dodoma", "Iringa"]}
        heading="Cities"
      />
    </div>
  );
}

export default App;
