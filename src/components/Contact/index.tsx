import Image from "next/image";
import React from "react";
import { EmailIcon, PersonIcon } from "../ui/Icons";

export const Contact = () => {
	return (
		<div className="w-full bg-dark py-10" id="contact">
			<div className="container flex flex-col xl:flex-row items-center justify-center gap-[60px] xl:gap-[124px]">
				<Image
					src="/logo-small.png"
					width={400}
					height={385}
					alt="Logo small"
				/>
				<div className="space-y-3">
					<h1 className="text-light">Contact</h1>
					<div className="flex gap-4 items-center">
						<PersonIcon />
						<div>
							<h3 className="text-light">John Doe</h3>
							<h4 className="text-light">Technology Director</h4>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<EmailIcon />
						<h3 className="text-light">hello@startup.computer</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
