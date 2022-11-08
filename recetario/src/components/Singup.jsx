import { Component, useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import { useForm } from "react-hook-form";

import Input from "./Input";
import axios from "axios";

const createUserURL = "http://localhost:4000/create-user";

class Singup extends Component {
	state = {
		form: {
			full_name: "",
			username: "",
			email: "",
			password: "",
		},
	};

	async postUser() {
		await axios
			.post(createUserURL, this.state.form)
			.then((res) => {
				console.log(res);
				alert(res);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	}

	options = {
		method: "post",
		url: createUserURL,
		data: JSON.stringify(this.state.form),
	};

	crearUsuario = async () => {
		// await axios({})
		// 	.then((res) => alert("res", res))
		// 	.catch((err) => alert(err));
		await axios
			.post(
				`${createUserURL}/${this.state.form.full_name}/${this.state.form.username}/${this.state.form.email}/${this.state.form.password}`
			)
			.then((res) => {
				console.log(res);
				alert(res);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	};

	handleChange = async (e) => {
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
		// console.log(JSON.stringify(this.state.form));
	};

	render() {
		return (
			<form className="mt-8 space-y-6">
				<div className="">
					<input
						onChange={this.handleChange}
						className="input input-bordered w-full my-2"
						id="full_name"
						name="full_name"
						type="text"
						required
						autoComplete="off"
						placeholder="Nombre completo"
					/>
					<input
						onChange={this.handleChange}
						className="input input-bordered w-full my-4"
						id="username"
						name="username"
						type="text"
						required
						placeholder="Nombre de usuario"
					/>
					<input
						onChange={this.handleChange}
						className="input input-bordered w-full my-4"
						id="email"
						name="email"
						type="email"
						required
						placeholder="Correo electronico"
					/>
					<input
						onChange={this.handleChange}
						className="input input-bordered w-full my-4"
						id="password"
						name="password"
						type="password"
						required
						placeholder="Contraseña"
					/>
				</div>
				<button
					className="group relative w-full flex justify-center py-4 px-4 border border-transparent btn btn-primary"
					onClick={this.crearUsuario}
				>
					Registrarse
				</button>
			</form>
		);
	}
}

export default Singup;
