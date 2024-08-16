import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "@/config/navbar";

export default function NavDesktop() {
	return (
		<div className="gradientNavbar fixed top-6 hidden z-10 left-1/2 translate-x-[-50%] lg:flex gap-8 items-center rounded-[100px] px-8 py-6">
			{navLinks.map((link, idx) => (
				<NavLink key={link.label + idx} {...link} />
			))}
		</div>
	);
}
