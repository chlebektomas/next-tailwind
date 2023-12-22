"use client";

import { Game } from "@/types/game";
import { gameAction } from "./actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/useToast";
import CustomSwitch from "../formControl/CustomSwitch";
import Input from "../formControl/Input";
import React, { useEffect } from "react";
import SubmitButton from "../ui/SubmitButton";
import TextArea from "../formControl/TextArea";

const initialState = {
	status: "",
	message: "",
};

interface GameFormProps {
	defaultValues: Game;
}

function GameForm({ defaultValues }: GameFormProps) {
	const router = useRouter();
	const { toast } = useToast();
	const [state, formAction] = useFormState(gameAction, initialState);

	useEffect(() => {
		if (state?.message) {
			toast({
				title: state.message,
				variant: state.status === "failed" ? "destructive" : "default",
			});
			if (state.status !== "failed") router.back();
		}
	}, [router, state, toast]);

	return (
		<form id="game-form" action={formAction} className="space-y-8">
			<div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<input hidden name="id" value={defaultValues.id} />
				<input hidden name="userId" value={defaultValues.userId} />
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

export default GameForm;
