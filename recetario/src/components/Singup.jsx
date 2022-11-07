import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import { useForm } from "react-hook-form";

import Input from "./Input";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Singup() {
	const [signupState, setSignupState] = useState(fieldsState);

	const handleChange = (e) => {
		setSignupState({ ...signupState, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		authenticateUser();
	};

	const onSubmit = (e) => {};

	return (
		<form className="mt-8 space-y-6">
			<div className="">
				<Input
					handleChange={handleChange}
					labelText="Nombre Completo"
					labelFor="full_name"
					id="full_name"
					name="full_name"
					type="text"
					isRequired
					placeholder="Nombre completo"
				/>
				<Input
					handleChange={handleChange}
					labelText="Nombre de usuario"
					labelFor="username"
					id="username"
					name="username"
					type="text"
					isRequired
					placeholder="Nombre de usuario"
				/>
				<Input
					handleChange={handleChange}
					labelText="Correo electronico"
					labelFor="email"
					id="email"
					name="email"
					type="email"
					isRequired
					placeholder="Correo electronico"
				/>
				<Input
					handleChange={handleChange}
					labelText="Contraseña"
					labelFor="password"
					id="password"
					name="password"
					type="password"
					isRequired
					placeholder="Contraseña"
				/>
			</div>
			<FormAction handleSubmit={handleSubmit} text="Registrarse" />
		</form>
	);
}
