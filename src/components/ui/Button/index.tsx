"use client";
import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	specialProp?: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			{...rest}
			className={cn(
				"font-semibold lowercase text-light text-2xl px-[45px] py-3 gradientButton rounded-[100px]",
				rest.className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
