import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";

function App() {
	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
