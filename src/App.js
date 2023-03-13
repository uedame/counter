import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
const [showText,setShowText] =useState(true);

  const onClickShow = () => {
    setShowText(!showText)
  }


  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Counter
      </button>
      <br />
      <br />
      <button onClick={onClickShow}>Text on/off</button>
      { showText && <p>BB WORLD</p> }
    </>
  );
}

export default App;