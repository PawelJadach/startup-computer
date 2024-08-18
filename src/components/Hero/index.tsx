import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Hero = () => {
	return (
		<div className="bg-dark bg-[url('/hero.png')] bg-no-repeat bg-cover bg-center w-full pt-32 pb-32">
			<div className="container flex justify-between gap-10">
				<div className="space-y-4 w-full md:w-2/3">
					<h1 className="text-light leading-[50px] xl:leading-[80px]">
						<span data-aos="fade-right">
							Designing
							<br />
							Future-Ready Applications for <br />
							the{" "}
						</span>
						<span
							data-aos="fade-right"
							data-aos-delay="200"
							className="text-secondary"
						>
							Medical Sector
						</span>
					</h1>
					<p
						className="text-light mb-24"
						data-aos="fade-right"
						data-aos-delay="400"
					>
						Create beautiful and functional applications
						<br />
						for the medical industry.
					</p>
					<Button data-aos="fade-right" data-aos-delay="600">
						<a href="#contact">get a quote</a>
					</Button>
				</div>
				<div data-aos="fade-left" data-aos-delay="200">
					<Image
						src="/logo-hero.png"
						alt="Startup computer logo"
						width={510}
						height={489}
						className="hidden md:block"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
