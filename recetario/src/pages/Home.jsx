import React from "react";

import PrincipalSection from "../components/Home/PrincipalSection";
import SecondarySection from "../components/Home/SecondarySection";

function Home() {
	return (
		<>
			<section>
				<PrincipalSection />
			</section>
			{/* // * TODO mostrar las recetas de la api */}
			<section className=" bg-base-200">
				<SecondarySection />
			</section>
		</>
	);
}

export default Home;
