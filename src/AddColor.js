import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("red");
  // const colorlist = ["green","skyblue","orange","pink"]
  const [colorlist, setColorlist] = useState(["orange", "red", "pink"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color
  };
  return (
    <div>
      <div>
        <input onChange={(event) => setColor(event.target.value)} type="text" style={styles} value={color} />
        <button onClick={() => setColorlist([...colorlist, color])}>addcolor</button>




      </div>
      {colorlist.map((clr) => (<ColorBox color={clr} />))}
    </div>
  );
}
