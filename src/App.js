import React, { useState } from "react";
import "./styles.css";
import ProgressBar from "./ProgressBar";
/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [value, setValue] = useState(0);
  const setValuer = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>

        <ProgressBar width={value} />
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
