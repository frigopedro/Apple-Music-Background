import "./App.css";
import Background from "./Background";
import useImageColor from "use-image-color";
import { useState, useEffect } from "react";
import Img from "./Album.jpg";

function App() {
  const [color, setColor] = useState(null);
  const { colors } = useImageColor(Img, { cors: false, colors: 5 });

  useEffect(() => {
    setColor(colors);
  }, [colors]);

  return (
    <div className="webmain">
      {color ? <Background cores={color} img={Img} /> : null}
    </div>
  );
}

export default App;
