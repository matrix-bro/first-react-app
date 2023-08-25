// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Kathmandu", "Lalitpur", "Pokhara", "Bhaktapur"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is an <span>Alert</span>
        </Alert>
      )}

      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Click Here
      </Button>
    </div>
  );
}

export default App;
