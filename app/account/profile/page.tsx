import Headline from "@/components/ui/Headline";
import UserForm from "@/components/forms/UserForm";

function Profile() {
	return (
		<>
			<Headline
				title="Profile"
				description="This informations will be displayed publicly so be careful what you share."
				backTo="/account"
			/>
			<UserForm />
			{/* <form>
			<div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="col-span-full">
					<label htmlFor="photo" className="input-label">
						Private
					</label>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? "bg-indigo-700" : "bg-gray-400"
						} relative inline-flex h-6 w-11 items-center rounded-full mt-2`}
					>
						<span className="sr-only">Private</span>
						<span
							className={`${
								enabled ? "translate-x-6" : "translate-x-1"
							} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						/>
					</Switch>
					<p className="input-description">Hide your profile.</p>
				</div>

				<div className="col-span-full">
					<label htmlFor="title" className="input-label">
						Title
					</label>
					<div className="mt-2">
						<div className="flex items-center rounded-md bg-white">
							<span className="select-none pl-2 text-neutral-400 sm:text-sm">
								sitename.com/
							</span>
							<input
								type="text"
								name="title"
								id="title"
								autoComplete="title"
								className="input"
								placeholder="johndoe"
							/>
						</div>
					</div>
				</div>

				<div className="col-span-full">
					<label htmlFor="about" className="input-label">
						About
					</label>
					<div className="mt-2">
						<textarea id="about" name="about" rows={3} className="input" />
					</div>
					<p className="input-description">
						Write a few sentences about yourself.
					</p>
				</div>

				<div className="col-span-full">
					<label htmlFor="cover-photo" className="input-label">
						Cover photo
					</label>
					<div className="mt-2 flex justify-center rounded-md border border-dashed border-white p-14">
						<div className="text-center">
							<PhotoIcon
								className="mx-auto h-12 w-12 text-gray-400"
								aria-hidden="true"
							/>
							<div className="mt-4 flex text-sm text-gray-400">
								<label
									htmlFor="file-upload"
									className="cursor-pointer text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
								>
									<span>Upload a file</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
									/>
								</label>
								<p className="pl-1">or drag and drop</p>
							</div>
							<p className="text-xs leading-5 text-gray-400">
								PNG, JPG, GIF up to 10MB
							</p>
						</div>
					</div>
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
				<button type="submit" className="button-primary">
					Save
				</button>
			</div>
		</form> */}
		</>
	);
}

export default Profile;
