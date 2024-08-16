import About from "@/components/About";
import Clients from "@/components/Clients";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Technology from "@/components/Technology";

export default function Home() {
	return (
		<main>
			<Hero />
			<Clients />
			<About />
			<Project />
			<Technology />
			<Contact />
		</main>
	);
}
