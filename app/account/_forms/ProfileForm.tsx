"use client";

import { updateProfileAction } from "../profile/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { UserProfile } from "@/types/user";
import { useToast } from "@/components/ui/useToast";
import ControlledInput from "@/components/FormControl/ControlledInput";
import ControlledSwitch from "@/components/FormControl/ControlledSwitch";
import ControlledTextArea from "@/components/FormControl/ControlledTextArea";
import SubmitButton from "@/components/FormControl/SubmitButton";

const initialState = {
	status: "",
	message: "",
};

interface ProfileFormProps {
	defaultValues: UserProfile;
}

export default function ProfileForm({ defaultValues }: ProfileFormProps) {
	const router = useRouter();
	const { toast } = useToast();
	const [state, formAction] = useFormState(updateProfileAction, initialState);

	useEffect(() => {
		if (state?.message) {
			toast({
				title: state.message,
				variant: state.status === "failed" ? "destructive" : "default",
			});
		}
	}, [state, toast]);

	return (
		<form id="profile-form" action={formAction} className="space-y-8">
			<div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="col-span-full">
					<ControlledSwitch
						label="Private"
						name="private"
						initialValue={defaultValues.private}
						errors={state?.errors}
					/>
				</div>
				<div className="col-span-full">
					<ControlledInput
						label="Title"
						name="title"
						value={defaultValues.title}
						errors={state?.errors}
					/>
				</div>
				<div className="col-span-full">
					<ControlledTextArea
						label="Description"
						name="description"
						value={defaultValues.description}
						rows={3}
						errors={state?.errors}
					/>
				</div>
			</div>
			<div className="mt-6 flex justify-end">
				<button
					type="button"
					className="button-link"
					onClick={() => router.back()}
				>
					Cancel
				</button>
				<SubmitButton title="Save" />
			</div>
		</form>
	);
}
