const fixedInputClass =
	"rounded-md appearance-none relative block w-full px-3 py-2 border  focus:outline-none focus:z-10 sm:text-sm";

export default function Input({ id, placeholder, type }) {
	return (
		<div className="my-5">
			{/* <label className="label" htmlFor={labelFor}>
				<span className="label-text">{labelText}</span>
			</label> */}
			<input
				className="input input-bordered w-full"
				id={id}
				type={type}
				autoComplete="off"
				placeholder={placeholder}
			/>
		</div>
	);
}
