import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

import "./index.css";
import "./pages/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import InicioSesion from "./pages/InicioSesion";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<BubblyContainer />

			<Routes>
				<Route path="/login" element={<InicioSesion />} />
				<Route path="/signup" element={<SignUpForm />} />
				{/* <Route path="/iniciar-sesion" element={<InicioSesion />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function NotFound() {
	return <>Ha llegado a una pagina que no existe</>;
}
