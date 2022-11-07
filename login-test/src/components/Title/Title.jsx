import React from "react";
// import "./title.css";
import Label from "../Label/Label";

function Title({ titulo }) {
	return (
		<div className="title-container">
			<h1 className="text-5xl font-bold">{titulo}</h1>
		</div>
	);
}

export default Title;
