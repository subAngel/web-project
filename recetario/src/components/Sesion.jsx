import axios from "axios";
import md5 from "md5";
import { Component } from "react";
import Cookies from "universal-cookie";

const peticionUrl = "http://localhost:4000/user/";
const cookies = new Cookies();

class Sesion extends Component {
	state = {
		form: {
			username: "",
			password: "",
		},
	};

	iniciarSesion2 = async () => {
		if (this.state.username !== "" && this.state.password !== "") {
			await axios
				.get(peticionUrl, {
					params: {
						username: this.state.username,
						password: md5(this.state.password),
					},
				})
				.then((res) => {
					console.log(res.data);
					return res.data;
				})
				.then((res) => {
					if (res.length > 0) {
						var respuesta = res[0];
						cookies.set("_id", respuesta._id, { path: "/" });
						cookies.set("full_name", respuesta.full_name, { path: "/" });
						cookies.set("username", respuesta.username, { path: "/" });
						cookies.set("email", respuesta.email, { path: "/" });
						alert(`Bienvenido ${respuesta.full_name}`);
					}
				})
				.catch((err) => {
					console.log(err);
				});
			e.preventDefault();
		} else {
			alert("los campos deben ser requeridos");
		}
	};

	iniciarSesion = async () => {
		await axios
			.get(peticionUrl + this.state.form.username)
			.then((response) => {
				// console.log(response.data);
				return response.data;
			})
			.then((response) => {
				if (response) {
					if (md5(this.state.form.password) !== response.password) {
						console.log("Error en la contraseña");
					} else {
						cookies.set("_id", response._id, { path: "/" });
						cookies.set("username", response.username, { path: "/" });
						cookies.set("full_name", response.full_name, { path: "/" });
						cookies.set("email", response.email, { path: "/" });
						// alert("Bienvenido!");
						window.location.href = "../mis-recetas";
					}
				} else {
					alert("el usuario y contraseña son incorrectos");
				}
			})
			.catch((err) => {
				console.log("EL usuario no existe");
			});
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

	componentDidMount() {
		if (cookies.get("username")) {
			window.location.href = "./mis-recetas";
		}
	}

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
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent btn btn-primary"
					onClick={this.iniciarSesion}
				>
					Iniciar Sesión
				</button>
			</form>
		);
	}
}

export default Sesion;
