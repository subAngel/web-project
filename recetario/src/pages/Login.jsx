import Header from "../components/Header";
import Login from "../components/Login";
export default function LoginPage() {
	return (
		<>
			<Header
				heading={"Inicia sesion con tu cuenta"}
				paragraph={"¿Aún no tienes cuenta? "}
				linkName={"Registrate aquí"}
				linkUrl={"/signup"}
			/>
			<Login />
		</>
	);
}
