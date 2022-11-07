import React from "react";

function Input({ atributo, handleChange, param }) {
	return (
		<div>
			<input
				id={atributo.id}
				name={atributo.name}
				placeholder={atributo.placeholder}
				type={atributo.type}
				onChange={(e) => {
					handleChange(e.target.name, e.target.value);
				}}
				className={
					param
						? "input input-bordered input-error w-full max-w-xs"
						: "input input-bordered w-full max-w-xs"
				}
			/>
		</div>
	);
}

export default Input;
