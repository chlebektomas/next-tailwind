import { Switch } from "@headlessui/react";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from "../ui/form";
import { FieldPath, UseControllerProps } from "react-hook-form";

interface ControlledSwitchProps<
	Values extends Record<string, any>,
	Name extends FieldPath<Values>
> {
	control: UseControllerProps<Values, Name>["control"];
	helperText?: React.ReactNode;
	label: string;
	name: Name;
}

function ControlledSwitch<
	Values extends Record<string, any>,
	Name extends FieldPath<Values>
>({ control, helperText, label, name }: ControlledSwitchProps<Values, Name>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Switch
							checked={field.value}
							onChange={field.onChange}
							className={`${
								field.value ? "bg-green-500" : "bg-gray-400"
							} relative inline-flex h-6 w-11 items-center rounded-full mt-2`}
						>
							<span
								className={`${
									field.value ? "translate-x-6" : "translate-x-1"
								} inline-block h-4 w-4 transform rounded-full bg-white transition`}
							/>
						</Switch>
					</FormControl>
					{helperText && <FormDescription>{helperText}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export default ControlledSwitch;
