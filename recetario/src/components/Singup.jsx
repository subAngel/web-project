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

	return (
		<form className="mt-8 space-y-6">
			<div className="">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={signupState[field.id]}
						labelText={field.labelText}
						labelFor={field.labelFor}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
					/>
				))}
			</div>
			<FormAction handleSubmit={handleSubmit} text="Registrarse" />
		</form>
	);
}
