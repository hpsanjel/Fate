import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const Error404 = () => {
	return (
		<>
			<div className="container text-center p-20 min-h-full bg-slate-100 rounded-lg mt-20">
				<SectionHeader />

				<h1 className="text-lg">Error 404</h1>
				<h3>Sorry, this page is not available right now!</h3>
				<h4> Please visit later.</h4>
				<br />
				<Link to="/" className="primary-btn text-xs">
					Go back to home
				</Link>
			</div>
		</>
	);
};

export default Error404;
