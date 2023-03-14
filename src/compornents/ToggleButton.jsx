import React from "react";
const style = {
  backgroundColor: "limegreen",
	color: "red",
	width: "600px",
	padding:"30px",
};

export const ToggleButton = (props) => {

	const { showText, onClick } = props;

	return (
		<div style={style}>
		<button onClick={onClick}>ToggleText on/off</button>
		{ showText && <p>BB WORLD</p> }
		</div>
)

}