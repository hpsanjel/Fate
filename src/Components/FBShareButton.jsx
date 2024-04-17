const FBShareButton = ({ blogTitle, blogUrl }) => {
	const handleShare = () => {
		const encodedUrl = encodeURIComponent(blogUrl);

		window.FB.ui({
			method: "share",
			href: encodedUrl,
			quote: blogTitle,
		});
	};

	return <i onClick={handleShare} className="bi bi-share outline-[teal-900] px-1 py-2 w-10 text-center text-white mt-3"></i>;
};

export default FBShareButton;
