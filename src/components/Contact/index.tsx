import Image from "next/image";
import React from "react";
import { EmailIcon, LinkedinIcon } from "../ui/Icons";

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
					<a
						target="_blank"
						href="https://www.linkedin.com/company/startup-computer/"
						className="flex gap-4 items-center"
					>
						<LinkedinIcon />
						<h3 className="text-light">linkedin</h3>
					</a>
					<a
						href="mailto:hello@startup.computer"
						className="flex gap-4 items-center"
					>
						<EmailIcon />
						<h3 className="text-light">hello@startup.computer</h3>
					</a>
				</div>
			</div>
		</div>
	);
};
