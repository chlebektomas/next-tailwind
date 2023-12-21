"use client";

import { createGame, updateGame } from "@/lib/firestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/useToast";
import { Game } from "@/types/game";
import ControlledSwitch from "../formControl/ControlledSwitch";
import ControlledInput from "../formControl/ControlledInput";
import ControlledTextArea from "../formControl/ControlledTextArea";

interface GameFormProps {
	data?: Game;
	mode: "create" | "edit";
}

function GameForm({ data, mode }: GameFormProps) {
	const { toast } = useToast();
	const { data: session } = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const validationSchema = z.object({
		private: z.boolean(),
		title: z.string().min(3),
		description: z.string().min(5),
	});

	const defaultValues = {
		private: data?.private || false,
		title: data?.title || "",
		description: data?.description || "",
		createdAt: data?.createdAt || new Date(),
	};

	const form = useForm<Game>({
		resolver: zodResolver(validationSchema),
		defaultValues,
	});

	async function onSubmit(values: Game) {
		if (!session) return;

		setLoading(true);

		const requestData: Game = {
			id: mode === "create" ? undefined : data?.id,
			userId: session.user.id,
			private: values.private,
			title: values.title,
			description: values.description,
			createdAt: defaultValues.createdAt,
		};

		try {
			if (mode === "create") {
				const response = await createGame(requestData);
				if (response) {
					router.push("/account/content");
					toast({
						title: "Content created successfully.",
					});
				}
			}

			if (mode === "edit") {
				const response = await updateGame(session.user.id, requestData);
				if (response) {
					router.push("/account/content");
					toast({
						title: "Content edited successfully.",
					});
				}
			}
		} catch (error) {
			setLoading(false);
			toast({
				title: String(error),
				variant: "destructive",
			});
		}
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<div className="col-span-full">
						<ControlledSwitch
							control={form.control}
							label="Private"
							name="private"
							helperText="Make your content private."
						/>
					</div>
					<div className="col-span-full">
						<ControlledInput
							control={form.control}
							label="Title"
							name="title"
						/>
					</div>
					<div className="col-span-full">
						<ControlledTextArea
							control={form.control}
							label="Description"
							name="description"
							helperText="Write couple words about your content."
							rows={3}
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
					<button type="submit" className="button-primary" disabled={loading}>
						{loading ? "Saving..." : "Save"}
					</button>
				</div>
			</form>
		</FormProvider>
	);
}

export default GameForm;
