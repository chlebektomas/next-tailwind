import { ZodIssue } from "zod";
import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

interface CustomSwitchProps {
	label: string;
	name: string;
	initialValue: boolean;
	description?: string;
	errors: ZodIssue[] | undefined;
}

function CustomSwitch({
	label,
	name,
	initialValue,
	description,
	errors,
}: CustomSwitchProps) {
	const [value, setValue] = useState(initialValue);

	return (
		<>
			<p className="input-label">{label}</p>
			{value}
			<Switch.Root
				name={name}
				checked={value}
				className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-400"
				onCheckedChange={() => {
					setValue(!value);
				}}
			>
				<Switch.Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
			</Switch.Root>
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

export default CustomSwitch;
