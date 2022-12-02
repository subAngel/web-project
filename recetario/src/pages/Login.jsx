import Header from "../components/Header";
import Login from "../components/Login";
import Sesion from "../components/Sesion";
export default function LoginPage() {
	return (
		<>
			<div className="min-h-full h-screen flex items-center justify-center bg-base-300 sm:px-6 lg:px-8 z-40">
				<div className="max-w-md w-full space-y-8">
					<Header
						heading={"Inicia sesion con tu cuenta"}
						paragraph={"¿Aún no tienes cuenta? "}
						linkName={"Registrate aquí"}
						linkUrl={"/signup"}
					/>
					{/* <Login /> */}
					<Sesion />
				</div>
			</div>
		</>
	);
}
