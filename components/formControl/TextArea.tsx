import { ZodIssue } from "zod";

interface TextAreaProps {
	label: string;
	name: string;
	value: string;
	rows: number;
	description?: string;
	errors: ZodIssue[] | undefined;
}

function TextArea({
	label,
	name,
	value,
	rows,
	description,
	errors,
}: TextAreaProps) {
	return (
		<>
			<p className="input-label">{label}</p>
			<textarea
				name={name}
				defaultValue={value}
				rows={rows}
				className="input"
			/>
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

export default TextArea;
