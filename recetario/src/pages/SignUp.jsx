import Header from "../components/Header";
import Singup from "../components/Singup";

export default function SignUpPage() {
	return (
		<>
			<Header
				heading={"Bienvenido, Crea una cuenta"}
				paragraph={"¿Ya tienes una cuenta?"}
				linkName={"Inicia sesión aquí"}
				linkUrl={"/login"}
			/>
			<Singup />
		</>
	);
}
