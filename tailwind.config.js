/**  @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.jsx", "./Components/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				darkgreen: "3ed4ed",
			},
		},
	},
	plugins: [],
};
