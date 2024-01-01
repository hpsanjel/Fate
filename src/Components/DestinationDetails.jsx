import React from "react";
import { useLocation } from "react-router-dom";

const DestinationDetails = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const id = queryParams.get("id");

	// Fetch content based on the ID and display it in detail
	// ...

	return <div>Display detailed content</div>;
};

export default DestinationDetails;
