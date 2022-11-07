import { Component } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import md5 from "md5";
import { useState } from "react";
import { loginFields } from "../constants/formFields";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const baseUrl = "http://localhost:4000/users";
const cookies = new Cookies();

class Login extends Component {
	state = {
		form: {
			username: "",
			password: "",
		},
	};

	handleChange = async (e) => {
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
		// console.log(this.state.form);
	};

	iniciarSesion = async () => {
		await Axios
			// .get(baseUrl)
			.get(baseUrl, {
				params: {
					username: this.state.form.username,
					password: md5(this.state.form.password),
				},
			})
			.then((response) => {
				console.log(response.data);
			})
			.then((res) => {
				if (res.length > 0) {
					var respuesta = res[0];
					cookies.set("_id", respuesta._id, { path: "/" });
					cookies.set("full_name", respuesta.full_name, { path: "/" });
					cookies.set("username", respuesta.username, { path: "/" });
					cookies.set("email", respuesta.email, { path: "/" });
					alert(`Bienvenido ${respuesta.full_name}`);
				} else {
					alert("El usuario o la contraseña no son correctos");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// TODO handle login api integration here
	render() {
		return (
			<form className="mt-8 space-y-6">
				<div className="-space-y-px">
					<div>
						<input
							onChange={this.handleChange}
							id="username"
							name="username"
							type="text"
							autoComplete="off"
							className="input input-bordered w-full"
							placeholder="Nombre de usuario"
						/>
					</div>
					<div>
						<input
							onChange={this.handleChange}
							id="password"
							name="password"
							type="password"
							autoComplete="off"
							className="input input-bordered w-full mt-8"
							placeholder="Contraseña"
						/>
					</div>
				</div>
				<button
					className="btn w-full "
					onClick={() => {
						this.iniciarSesion();
					}}
				>
					Iniciar Sesión
				</button>
			</form>
		);
	}
}
export default Login;
