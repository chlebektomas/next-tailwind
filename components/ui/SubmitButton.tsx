import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

interface SubmitButtonProps {
	title: string | ReactNode;
}

const SubmitButton = ({ title }: SubmitButtonProps) => {
	const { pending } = useFormStatus();

	if (pending) return <Spinner blur />;

	return (
		<button type="submit" disabled={pending} className="button-primary">
			{title}
		</button>
	);
};

export default SubmitButton;
