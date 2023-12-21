import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from "../ui/form";
import { FieldPath, UseControllerProps } from "react-hook-form";
import { Input } from "../ui/input";

interface ControlledInputProps<
	Values extends Record<string, any>,
	Name extends FieldPath<Values>
> {
	control: UseControllerProps<Values, Name>["control"];
	helperText?: React.ReactNode;
	label: string;
	name: Name;
}

function ControlledInput<
	Values extends Record<string, any>,
	Name extends FieldPath<Values>
>({ control, helperText, label, name }: ControlledInputProps<Values, Name>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input {...field} />
					</FormControl>
					{helperText && <FormDescription>{helperText}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export default ControlledInput;
