import { ZodIssue } from "zod";

interface InputProps {
	label: string;
	name: string;
	value: string;
	description?: string;
	errors: ZodIssue[] | undefined;
}

function Input({ label, name, value, description, errors }: InputProps) {
	return (
		<>
			<p className="input-label">{label}</p>
			<input name={name} defaultValue={value} type="text" className="input" />
			{description && <p className="input-description">{description}</p>}
			{errors?.map(
				(error, i) =>
					error.path[0] === name && (
						<p
							key={i}
							className="text-sm font-medium text-red-500 error-message"
						>
							{error.message}
						</p>
					)
			)}
		</>
	);
}

export default Input;
