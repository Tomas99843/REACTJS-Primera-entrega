import React from "react";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Header/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda, estamos trabajando aqui!" />
    </>
  );
}

export default App;