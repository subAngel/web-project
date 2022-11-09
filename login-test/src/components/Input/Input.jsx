import React from "react";

function Input({ atributo, handleChange, param }) {
	return (
		<div>
			<input
				id={atributo.id}
				name={atributo.name}
				placeholder={atributo.placeholder}
				type={atributo.type}
				autoComplete="off"
				required
				onChange={(e) => {
					handleChange(e.target.name, e.target.value);
				}}
				className={
					param
						? "input input-bordered input-error w-full  my-4"
						: "input input-bordered w-full my-4 "
				}
			/>
		</div>
	);
}

export default Input;
