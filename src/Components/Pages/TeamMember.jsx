import React, { useState } from "react";

const TeamMember = ({ name, role, photo, email, phone }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="relative flex flex-col items-center p-12 rounded-lg shadow-md bg-white" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<img className="w-48 h-48 rounded-full object-cover mx-auto mb-4" src={photo} alt={`${name} - Team Member`} />
			<h3 className="text-xl font-medium text-gray-800">{name}</h3>
			<p className="text-gray-600">{role}</p>
			<div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-fateSecondaryDark text-white flex justify-between px-6 items-center transition-all duration-300 overflow-hidden" style={{ height: isHovered ? "50px" : "0" }}>
				<div className="flex items-center justify-center">
					<i className="bi bi-envelope mr-1"></i>
					<p className=" text-xs">{email}</p>
				</div>
				<div className="flex items-center justify-center">
					<i className="bi bi-phone mr-1"></i>
					<p className=" text-xs">{phone}</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
