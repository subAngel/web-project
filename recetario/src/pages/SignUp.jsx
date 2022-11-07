import Header from "../components/Header";
import Singup from "../components/Singup";

export default function SignUpPage() {
	return (
		<>
			<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<Header
						heading={"Bienvenido, Crea una cuenta"}
						paragraph={"¿Ya tienes una cuenta?"}
						linkName={"Inicia sesión aquí"}
						linkUrl={"/login"}
					/>
					<Singup />
				</div>
			</div>
		</>
	);
}
