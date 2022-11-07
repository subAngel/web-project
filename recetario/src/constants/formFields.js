const loginFields = [
	{
		labelText: "Nombre de usuario",
		labelFor: "username",
		id: "username",
		name: "username",
		type: "text",
		isRequired: true,
		placeholder: "Nombre de usuario",
	},
	{
		labelText: "Contraseña",
		labelFor: "password",
		id: "password",
		name: "password",
		type: "password",
		isRequired: true,
		placeholder: "Contraseña",
	},
];

const signupFields = [
	{
		labelText: "Nombre completo",
		labelFor: "full_name",
		id: "full_name",
		name: "full_name",
		type: "text",
		isRequired: true,
		placeholder: "Nombre completo",
	},
	{
		labelText: "Nombre de usuario",
		labelFor: "username",
		id: "username",
		name: "username",
		type: "text",
		isRequired: true,
		placeholder: "Nombre de usuario",
	},
	{
		labelText: "Correo electrónico",
		labelFor: "email",
		id: "email",
		name: "email",
		type: "text",
		isRequired: false,
		placeholder: "Correo electrónico",
	},
	{
		labelText: "Contraseña",
		labelFor: "password",
		id: "password",
		name: "password",
		type: "password",
		isRequired: true,
		placeholder: "Contraseña",
	},
];

export { loginFields, signupFields };
