import Image from "next/image";
import React from "react";

const Clients = () => {
	return (
		<div
			className="bg-[url('/clients.png')] bg-no-repeat bg-cover bg-center w-full"
			id="clients"
			data-aos="fade-right"
		>
			<div className="container flex justify-center flex-col items-center gap-7 py-11">
				<h1>Our Clients</h1>
				<Image
					src="/clients-logos.png"
					className="mix-blend-luminosity"
					height={55}
					width={876}
					alt="Clients logos"
				/>
			</div>
		</div>
	);
};

export default Clients;
