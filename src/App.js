import MiComponente from "./MiComponente";
import React from "react";

const App = () => {
  return (
    <>
      <h2>Reyes Godos:</h2>
      <MiComponente rey={{nombre: "Atanagildo", reses: 18}} />
      <MiComponente rey={{nombre: "Ataulfo", reses: 3}} />
    </>
  );
};

export default App;
