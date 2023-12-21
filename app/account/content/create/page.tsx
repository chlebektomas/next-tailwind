import Headline from "@/components/ui/Headline";
import GameForm from "@/components/forms/GameForm";

function Create() {
	return (
		<>
			<Headline title="Create new content" backTo={"/account/content"} />
			<GameForm mode="create" />

			{/* <form>
				<div>
					<div className="col-span-full">
						<label htmlFor="title" className="input-label">
							Title
						</label>
						<div className="mt-2">
							<input name="title" className="input" />
						</div>
					</div>

					<div className="col-span-full">
						<label htmlFor="description" className="input-label">
							Description
						</label>
						<div className="mt-2">
							<textarea
								id="description"
								name="description"
								rows={3}
								className="input"
							/>
						</div>
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

export default Create;
