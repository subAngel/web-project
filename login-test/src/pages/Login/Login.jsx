import React, { useState } from "react";
import axios from "axios";

import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Title from "../../components/Title/Title";

// import "./login.css";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [hasError, setHasError] = useState(false);

	function handleChange(name, value) {
		if (name === "username") {
			// variable para almacenar
			setUsername(value);
		}
		if (name === "password") {
			if (value.length < 6) {
				setPasswordError(true);
			} else {
				setPasswordError(false);
				setPassword(value);
			}
		}
	}
	async function peticion() {
		return await axios({
			method: "GET",
			url: "http://localhost:4000/user",
			headers: {},
			data: {
				username,
			},
		});
	}

	function ifMatch(param) {
		if (param.username.length > 0 && param.password.length > 0) {
			if (param.username === "angel" && param.password === "angel12") {
				const { username, password } = param;
				let ac = { username, password };
				let account = JSON.stringify(ac);
				localStorage.setItem("account", account);
				setIsLogin(true);
			} else {
				setIsLogin(false);
				setHasError(true);
			}
		} else {
			setIsLogin(false);
			setHasError(true);
		}
	}

	function handleSubmit() {
		const getUser = peticion();
		console.log("usuario", getUser);
		let account = { username, password };
		if (account) {
			ifMatch(account);
		}
	}

	return (
		<>
			{hasError && (
				<div className="alert alert-error shadow-lg">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-current flex-shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>El usuario no se encuentra.</span>
					</div>
				</div>
			)}
			{isLogin ? (
				"Estoy logeado"
			) : (
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content text-center">
						<div className="max-w-md">
							<Title titulo={"LOGIN"} />
							<Label textLabel={"Usuario"} />
							<Input
								atributo={{
									id: "username",
									name: "username",
									placeholder: "Ingrese su usuario",
									type: "text",
								}}
								handleChange={handleChange}
							/>
							<Label textLabel={"Contraseña"} />
							<Input
								atributo={{
									id: "password",
									name: "password",
									placeholder: "Ingrese su contraseña",
									type: "password",
								}}
								handleChange={handleChange}
								param={passwordError}
							/>
							{passwordError && (
								<label className="label">
									<span className="label-text-alt"></span>
									<span className="label-text-alt">
										Contraseña invalida o inclompleta
									</span>
								</label>
							)}

							<button
								onClick={handleSubmit}
								className="mt-10 btn btn-primary "
							>
								Ingresar
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Login;
