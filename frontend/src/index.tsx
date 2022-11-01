import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Home from "./pages/Home";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<BubblyContainer />
			<Routes>
				{/* <Route
					path="/"
					element={
						<>
							<BubblyLink to="/">Home</BubblyLink>
							<BubblyLink to="/login">Iniciar Sesion</BubblyLink>
							<BubblyLink to="/signup">Registrarse</BubblyLink>
						</>
					}
				></Route> */}
				<Route path="/login" element={<LoginForm />} />
				<Route path="/signup" element={<SignUpForm />} />
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
