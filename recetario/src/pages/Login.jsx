<<<<<<< HEAD
import Header from "../components/Header";
import Login from "../components/Login";
import Sesion from "../components/Sesion";
export default function LoginPage() {
	return (
		<>
			<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
=======
import Header from "../components/Header";
import Login from "../components/Login";
import Sesion from "../components/Sesion";
export default function LoginPage() {
	return (
		<>
			<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<Header
						heading={"Inicia sesión con tu cuenta"}
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
>>>>>>> 867e2ad0fcb069f467c4af3a1c25f24589da9f7e
