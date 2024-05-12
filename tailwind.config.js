module.exports = {
	content: ["./index.html", "./src/**/*.jsx", "./Components/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				fatePrimary: "#2e8689",
				fateSecondaryLight: "#E4E0BD",
				fateSecondaryDark: "#BDAA66",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				marquee: "marquee 40s linear infinite",
			},
		},
	},
	plugins: [],
};
