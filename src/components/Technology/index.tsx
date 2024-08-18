import React from "react";
import { ListIcon } from "../ui/Icons";
import Button from "../ui/Button";

const Technology = () => {
	return (
		<div
			className="bg-[url('/team.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center"
			id="team"
		>
			<div className="container flex flex-col py-24 items-center gap-10">
				<h1 className="text-dark" data-aos="flip-right">
					Technology and Team
				</h1>
				<div className="space-y-5 flex flex-col items-center text-center">
					<h5
						data-aos="flip-right"
						data-aos-delay="200"
						className="text-dark flex gap-3 items-start"
					>
						<ListIcon /> Wide expertise in web and mobile system
						development
					</h5>
					<h5
						data-aos="flip-right"
						data-aos-delay="400"
						className="text-dark flex gap-3 items-start"
					>
						<ListIcon /> Cutting edge technologies for faster
						development (e.g. Flutter for apps)
					</h5>
					<h5
						data-aos="flip-right"
						data-aos-delay="600"
						className="text-dark flex gap-3 items-start"
					>
						<ListIcon /> Part of the OVH Cloud startup programme
					</h5>
					<h5
						data-aos="flip-right"
						data-aos-delay="800"
						className="text-dark flex gap-3 items-start"
					>
						<ListIcon /> Tech team contains specialists in UX,
						back-end, front-end and mobile developers
					</h5>
					<h5
						data-aos="flip-right"
						data-aos-delay="1000"
						className="text-dark flex gap-3 items-start"
					>
						<ListIcon /> Close cooperation domain experts with
						practical knowledge about the medical device market
					</h5>
				</div>
				<Button
					data-aos="flip-right"
					data-aos-delay="1200"
					className="gradientButtonSecondary"
				>
					<a href="#contact">get a quote</a>
				</Button>
			</div>
		</div>
	);
};

export default Technology;
