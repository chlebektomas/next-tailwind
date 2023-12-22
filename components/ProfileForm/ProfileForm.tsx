"use client";

import { updateProfileAction } from "./actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { UserProfile } from "@/types/user";
import { useToast } from "../ui/useToast";
import CustomSwitch from "../formControl/CustomSwitch";
import Input from "../formControl/Input";
import SubmitButton from "../ui/SubmitButton";
import TextArea from "../formControl/TextArea";
import { useEffect } from "react";

const initialState = {
	status: "",
	message: "",
};

interface ProfileFormProps {
	defaultValues: UserProfile;
}

function ProfileForm({ defaultValues }: ProfileFormProps) {
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
					<CustomSwitch
						label="Private"
						name="private"
						initialValue={defaultValues.private}
						errors={state?.errors}
					/>
				</div>
				<div className="col-span-full">
					<Input
						label="Title"
						name="title"
						value={defaultValues.title}
						errors={state?.errors}
					/>
				</div>
				<div className="col-span-full">
					<TextArea
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

export default ProfileForm;
