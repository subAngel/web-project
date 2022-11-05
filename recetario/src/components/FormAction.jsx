export default function FormAction({
	handleSubmit,
	type = "Button",
	action = "submit",
	text,
}) {
	return (
		<>
			{type === "Button" ? (
				<button
					type={action}
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent btn btn-primary"
				>
					{text}
				</button>
			) : (
				<></>
			)}
		</>
	);
}
