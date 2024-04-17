export const slugify = (text) => {
	if (!text) {
		console.error("Error: Null text.");
		return "";
	}
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[^\w-]+/g, "") // Remove non-word characters
		.replace(/--+/g, "-"); // Replace multiple - with single -
};
