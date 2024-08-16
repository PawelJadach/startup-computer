import { Metadata } from "next";

type Config = {
	metadata: {
		[key: string]: Metadata;
	};
	locale: string;
};

export const config: Config = {
	metadata: {
		root: {
			title: "Startup Computer",
			description:
				"Designing Future-Ready Applications for the Medical Sector",
			metadataBase: new URL("https://pixel-blaze.com/"),
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
