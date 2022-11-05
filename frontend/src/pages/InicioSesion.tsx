import React from "react";
import { BubblyLink } from "react-bubbly-transitions";

function InicioSesion() {
	const $navbar = document.getElementsByClassName("navbar");

	return (
		<div className="container-fluid ps-md-0">
			<div className="row g-0">
				<div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
				<div className="col-md-8 col-lg-6">
					<div className="login d-flex align-items-center py-5">
						<div className="container">
							<div className="row">
								<div className="col-md-9 col-lg-8 mx-auto ">
									<img
										className="img-form"
										src="https://cdn-icons-png.flaticon.com/512/683/683488.png"
										alt="Imagen de un recetario"
									/>
									<h3 className="center login-heading mb-4">
										Iniciar Sesión
									</h3>
									{/* Sign In Form */}
									<form>
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												id="floatingInput"
												placeholder="Nombre de usuario"
											/>
											<label htmlFor="floatingInput">
												Nombre de usuario
											</label>
										</div>
										<div className="form-floating mb-3">
											<input
												type="password"
												className="form-control"
												id="floatingPassword"
												placeholder="Contraseña"
											/>
											<label htmlFor="floatingPassword">
												Contraseña
											</label>
										</div>

										<p>
											Si aun no tienes cuenta por favor
											registrese{" "}
											<BubblyLink
												to="/signup"
												className="log-in-btn "
											>
												aquí
											</BubblyLink>
										</p>

										<div className="d-grid">
											<button
												className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
												type="submit"
											>
												Iniciar Sesion
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InicioSesion;
