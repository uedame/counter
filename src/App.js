import React, { useState } from 'react';
import { CountButton } from './compornents/CountButton'
import { ToggleButton } from './compornents/ToggleButton';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const onClickShow = () => {
    setShowText(!showText)
  }


  return (
    <>
      <CountButton count={count} setCount={setCount} />
      <br />
      <br />
      <ToggleButton showText={showText} onClick={onClickShow} />
    </>
  );
}

export default App;