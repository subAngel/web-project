import { Link } from "react-router-dom";

export default function Header({ heading, paragraph, linkName, linkUrl = "#" }) {
	return (
		<div className="mb-10">
			<div className="flex justify-center">
				<img
					src="https://i.pinimg.com/originals/95/f3/4e/95f34e9bc588226a8c91a1be5bbebd67.png"
					alt="Imagen del recetario"
					className="h-24 w-24"
				/>
			</div>
			<h2 className="mt-6 text-center text-3xl font-extrabold">{heading}</h2>
			<p className="text-center text-sm mt-5">
				{paragraph}{" "}
				<Link
					to={linkUrl}
					className="font-medium text-purple-600 hover:text-purple-500"
				>
					{linkName}
				</Link>
			</p>
		</div>
	);
}
