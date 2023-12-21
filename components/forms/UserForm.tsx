"use client";

import { updateUserProfile } from "@/lib/firestore";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/useToast";
import { UserProfile } from "@/types/user";
import ControlledSwitch from "../formControl/ControlledSwitch";
import ControlledInput from "../formControl/ControlledInput";
import ControlledTextArea from "../formControl/ControlledTextArea";

function UserForm() {
	const { toast } = useToast();
	const { data: session, update } = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const validationSchema = z.object({
		private: z.boolean(),
		title: z.string().min(3),
		description: z.string().min(5),
	});

	const defaultValues: UserProfile = {
		private: session?.user?.profile?.private || false,
		title: session?.user?.profile?.title || "",
		description: session?.user?.profile?.description || "",
	};

	const form = useForm<UserProfile>({
		resolver: zodResolver(validationSchema),
		defaultValues,
	});

	async function onSubmit(values: UserProfile) {
		if (!session) return;

		setLoading(true);

		const requestData: UserProfile = {
			private: values.private,
			title: values.title,
			description: values.description,
		};

		try {
			const response = await updateUserProfile(session?.user?.id, requestData);
			if (response) {
				update();
				router.push("/account");
				toast({
					title: "Profile edited successfully.",
				});
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
							helperText="Hide your profile."
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
							helperText="Write a few sentences about yourself."
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

export default UserForm;
