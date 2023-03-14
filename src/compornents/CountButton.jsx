import React from "react";

const style = {
  backgroundColor: "lightblue",
	width: "600px",
	padding:"30px",
};
const styleButton = {
  color: "red",

};

export const CountButton = (props) => {
  const { count, setCount } = props;

  return (
    <div style={style}>
      <p>
        You clicked <span style={styleButton}>{count}</span> times
      </p>
      <button onClick={() => setCount(count + 1)}>Click Counter</button>
    </div>
  );
};
