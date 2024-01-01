import React from "react";

const HeroVideo = () => {
	return (
		<video autoPlay loop muted playsInline className="w-full h-screen object-cover">
			<source src="https://player.vimeo.com/external/432140844.sd.mp4?s=40e14e0ae07c03f9618edeb71dc66cf2ab96c248&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
};

export default HeroVideo;
