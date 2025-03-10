import React from "react";
import DraggableElement from "./DraggableElement";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "#f4f4f4" }}>
      <DraggableElement id="pickingBtn" type="button" defaultText="Picking" />
      <DraggableElement id="putAwayBtn" type="button" defaultText="Put Away" />
      <DraggableElement id="inventoryBtn" type="button" defaultText="Inventory" />
      <DraggableElement id="userImage" type="image" imageUrl="https://via.placeholder.com/150" />
      <DraggableElement id="quantityInput" type="input" />
      <DraggableElement id="objectDescription" type="text" defaultText="Item Description" />
      <DraggableElement id="productImage" type="image" imageUrl="https://via.placeholder.com/200" />
      <DraggableElement id="confirmBtn" type="button" defaultText="Confirm" />
    </div>
  );
};

export default App;
