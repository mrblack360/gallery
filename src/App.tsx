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
    </div>
  );
}

export default App;
