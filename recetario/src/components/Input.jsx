const fixedInputClass =
	"rounded-md appearance-none relative block w-full px-3 py-2 border  focus:outline-none focus:z-10 sm:text-sm";

export default function Input({ atributo, handleChange, param }) {
	return (
		<div className="my-5">
			{/* <label className="label" htmlFor={labelFor}>
				<span className="label-text">{labelText}</span>
			</label> */}
			<input
				onChange={(e) => {
					handleChange(e.target.name, e.target.value);
				}}
				className={
					param
						? "input input-bordered input-error w-full max-w-xs"
						: "input input-bordered w-full max-w-xs"
				}
				id={atributo.id}
				name={atributo.name}
				type={atributo.type}
				autoComplete="off"
				placeholder={atributo.placeholder}
			/>
		</div>
	);
}
