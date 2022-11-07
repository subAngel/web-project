import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import User from "./pages/User";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Home />} />
				{/* <Route path="/sesion" element={ <Sesion/>} /> */}
				<Route path="/mis-recetas" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
