import ListGroup from "./components/ListGroup";

function App() {
  let items = ["İstanbul", "Ankara", "İzmir", "Afyon", "Denizli"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
