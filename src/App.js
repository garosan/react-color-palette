import React from "react";

import Palette from "./Palette";
import seedColors from "./seedColors";

const App = () => {
  return (
    <div>
      <Palette {...seedColors[1]}></Palette>
    </div>
  );
};

export default App;
