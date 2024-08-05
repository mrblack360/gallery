import Alert from "./Alert";
import ListGroup from "./ListGroup";
import Message from "./Message";

let handleSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <Message />
      <ListGroup
        items={["Dar", "Morogoro", "Dodoma", "Iringa"]}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Woyoooooo <strong>It's another child node</strong>
      </Alert>
    </div>
  );
}

export default App;
