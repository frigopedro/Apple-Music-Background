import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ImagesContext } from "../../ImageContext";

function Background({ color, img }) {
  const data = useContext(ImagesContext);
  var position = [];
  //The set of colors that are going to be used in the background
  const colors = color;

  //Creating a 2d array with a specific size, the size implies the resolution of the background
  console.log(colors);
  const SIZE = 6;
  for (var i = 0; i < SIZE; i++) {
    position[i] = [];
  }

  //Setting the colors to a random position in the array
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      position[i][j] = colors[Math.floor(Math.random() * colors.length)];
    }
  }
  {
  }
  return (
    <div className="App">
      {console.log(data)}

      <div className="blur">
        <img src={img} className="album" />
      </div>
      <div className="container">
        {position.map((row) => {
          return row.map((col) => {
            return (
              <div
                className="pixel"
                style={{ background: col }}
                key={uuidv4()}
              />
            );
          });
        })}
      </div>
    </div>
  );
}

export default Background;
