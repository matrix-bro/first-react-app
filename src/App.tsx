// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Kathmandu", "Lalitpur", "Pokhara", "Bhaktapur"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Click Here
      </Button>
    </div>
  );
}

export default App;
