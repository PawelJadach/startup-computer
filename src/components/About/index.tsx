import React from "react";
import Button from "../ui/Button";

const About = () => {
	return (
		<div
			className="bg-[url('/about.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center"
			id="about"
		>
			<div className="container flex justify-center flex-col items-center gap-7 py-11">
				<h1 data-aos="fade-right">About Us</h1>
				<p
					data-aos="fade-right"
					data-aos-delay="200"
					className="text-center max-w-[700px]"
				>
					Maybe we <b>DONT HAVE</b> slick SEO optimised website and an
					inspired company name or even a catchy slogan but{" "}
					<b>WE HAVE</b> a working and reliable product, large
					international customer with two more in the pipeline,
					extensive know-how, connecting technology with the medical
					industry
				</p>
				<Button
					data-aos="fade-right"
					data-aos-delay="400"
					className="gradientButtonSecondary"
				>
					<a href="#contact">start project</a>
				</Button>
			</div>
		</div>
	);
};

export default About;
