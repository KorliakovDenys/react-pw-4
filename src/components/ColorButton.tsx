import React from "react";
import ColorButtonProps from "../def/ColorButtonProps.ts";
import './styles/ColorButton.css'

const ColorButton = ({color, onClick}:ColorButtonProps) => {
	const backgroundColor:React.CSSProperties = {
		backgroundColor: color
	};

	return (
		<div style={backgroundColor} className={'color-button'} onClick={() => onClick(color)}>
			{color}
		</div>
	);
};

export default ColorButton;
