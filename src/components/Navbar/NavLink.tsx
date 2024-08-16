import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";

export type NavLinkProps = {
	href: string;
	label: string;
	filled?: boolean;
	mobile?: boolean;
};

export default function NavLink({ href, label, mobile = false }: NavLinkProps) {
	return (
		<Link href={href}>
			<span
				className={cn(
					"transition-all hover:opacity-90 text-light font-semibold",
					mobile && "text-xl",
				)}
			>
				{label}
			</span>
		</Link>
	);
}
