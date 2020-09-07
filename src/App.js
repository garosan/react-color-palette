import React, { Component } from "react";

import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[1]));
    return (
      <div>
        <Palette {...seedColors[1]}></Palette>
      </div>
    );
  }
}

export default App;
