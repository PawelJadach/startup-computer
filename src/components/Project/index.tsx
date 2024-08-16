import React from "react";
import { ListIcon } from "../ui/Icons";
import Image from "next/image";

const Project = () => {
	return (
		<div
			className="bg-[url('/hero.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center"
			id="project"
		>
			<div className="container flex flex-col xl:flex-row py-24 items-center gap-10">
				<div className="min-w-1/2 space-y-8">
					<h1 className="text-light" data-aos="fade-right">
						Project overview
					</h1>
					<h3
						data-aos="fade-right"
						className="text-light max-w-[650px]"
					>
						Tracking medical devices, orders and service events
					</h3>
					<div className="space-y-4">
						<h4
							data-aos="flip-right"
							data-aos-delay="200"
							className="text-light flex gap-3 items-start"
						>
							<ListIcon /> QR code based identification
						</h4>
						<h4
							data-aos="flip-right"
							data-aos-delay="300"
							className="text-light flex gap-3 items-start"
						>
							<ListIcon /> Tracking installation and repair orders
						</h4>
						<h4
							data-aos="flip-right"
							data-aos-delay="400"
							className="text-light flex gap-3 items-start"
						>
							<ListIcon /> Geolocalized device events
						</h4>
						<h4
							data-aos="flip-right"
							data-aos-delay="500"
							className="text-light flex gap-3 items-start"
						>
							<ListIcon /> Lead time monitoring
						</h4>
						<h4
							data-aos="flip-right"
							data-aos-delay="600"
							className="text-light flex gap-3 items-start"
						>
							<ListIcon /> Instant device inventory
						</h4>
						<h4
							data-aos="flip-right"
							data-aos-delay="700"
							className="text-light flex gap-3 items-start"
						>
							<ListIcon /> Report device issues without an app
						</h4>
					</div>
				</div>
				<div
					className="max-w-1/2"
					data-aos="flip-right"
					data-aos-delay="500"
				>
					<Image
						width={637}
						height={397}
						src="/project.png"
						alt="Project overview"
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
