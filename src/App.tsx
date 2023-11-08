import './styles/App.css'
import _ from 'lodash'
import ColorButton from "./components/ColorButton.tsx";
import ButtonBar from "./components/ButtonBar.tsx";
import Colors from "../colors.ts";
import React, {useState} from "react";

const App = () => {
  const [color, setColor] = useState(Colors[0]);

  const backgroundColor: React.CSSProperties = {
    backgroundColor:color
  };

  const ColorButtonClickHandler = (color: string) => {
    setColor(color);
  };

  const buttons: React.ReactElement[] = _.map(Colors, (color) => <ColorButton color={color} onClick={ColorButtonClickHandler}/>);

  return (
    <div className='app-container'>
      <ButtonBar buttons={buttons}/>
      <canvas style={backgroundColor}></canvas>
    </div>
  );
};

export default App;
