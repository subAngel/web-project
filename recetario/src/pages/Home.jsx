import React from "react";

import PrincipalSection from "../components/Home/PrincipalSection";

function Home() {
	return (
		<>
			<section>
				<PrincipalSection />
			</section>
			{/* // * TODO mostrar las recetas de la api */}
			<section>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row">
						<img
							src="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg"
							className="max-w-4xl rounded-lg shadow-2xl"
						/>
						<div>
							<h1 className="text-5xl font-bold">Box Office News!</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat
								ut assumenda excepturi exercitationem quasi. In
								deleniti eaque aut repudiandae et a id nisi.
							</p>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src="https://placeimg.com/260/400/arch"
							className="max-w-sm rounded-lg shadow-2xl"
						/>
						<div>
							<h1 className="text-5xl font-bold">Box Office News!</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat
								ut assumenda excepturi exercitationem quasi. In
								deleniti eaque aut repudiandae et a id nisi.
							</p>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
