import "./App.css";
import Background from "./Components/Background/index.js";
import useImageColor from "use-image-color";
import { useState, useEffect } from "react";
import Img from "./Img/Album.jpg";

function App() {
  const [color, setColor] = useState(null);
  const { colors } = useImageColor(Img, { cors: false, colors: 5 });

  useEffect(() => {
    setColor(colors);
  }, [colors]);

  return (
    <div className="App">
      {color ? <Background color={color} img={Img} /> : null}
    </div>
  );
}

export default App;
