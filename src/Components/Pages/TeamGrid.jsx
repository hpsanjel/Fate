import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
	{
		name: "Prem Sharma",
		role: "Managing Director",
		photo: "/images/slide1 Large.jpg",
		email: "suman@example.com",
		phone: "+977 9801234567",
		linkedin: "https://www.linkedin.com/in/suman-thapa",
		bio: "Suman leads the consultancy with a vision to provide top-notch guidance for students aspiring to study abroad.",
	},
	{
		name: "Rita Sharma",
		role: "Operations Manager",
		photo: "/images/slide3 Large.jpeg",
		email: "rita@example.com",
		phone: "+977 9802345678",
		linkedin: "https://www.linkedin.com/in/rita-sharma",
		bio: "Rita ensures smooth operations and works closely with students to understand their needs.",
	},
	{
		name: "Prakash Gurung",
		role: "Counseling Head",
		photo: "/images/slide4 Large.jpeg",
		email: "prakash@example.com",
		phone: "+977 9803456789",
		linkedin: "https://www.linkedin.com/in/prakash-gurung",
		bio: "Prakash has over 10 years of experience in guiding students toward their dream universities.",
	},
	{
		name: "Anjali Karki",
		role: "Marketing Specialist",
		photo: "/images/slide5 Large.jpeg",
		email: "anjali@example.com",
		phone: "+977 9804567890",
		linkedin: "https://www.linkedin.com/in/anjali-karki",
		bio: "Anjali creates engaging marketing campaigns to reach students across Nepal.",
	},
	{
		name: "Prem Sharma",
		role: "Managing Director",
		photo: "/images/slide1 Large.jpg",
		email: "suman@example.com",
		phone: "+977 9801234567",
		linkedin: "https://www.linkedin.com/in/suman-thapa",
		bio: "Suman leads the consultancy with a vision to provide top-notch guidance for students aspiring to study abroad.",
	},
	{
		name: "Rita Sharma",
		role: "Operations Manager",
		photo: "/images/slide3 Large.jpeg",
		email: "rita@example.com",
		phone: "+977 9802345678",
		linkedin: "https://www.linkedin.com/in/rita-sharma",
		bio: "Rita ensures smooth operations and works closely with students to understand their needs.",
	},
	{
		name: "Prakash Gurung",
		role: "Counseling Head",
		photo: "/images/slide4 Large.jpeg",
		email: "prakash@example.com",
		phone: "+977 9803456789",
		linkedin: "https://www.linkedin.com/in/prakash-gurung",
		bio: "Prakash has over 10 years of experience in guiding students toward their dream universities.",
	},
	{
		name: "Anjali Karki",
		role: "Marketing Specialist",
		photo: "/images/slide5 Large.jpeg",
		email: "anjali@example.com",
		phone: "+977 9804567890",
		linkedin: "https://www.linkedin.com/in/anjali-karki",
		bio: "Anjali creates engaging marketing campaigns to reach students across Nepal.",
	},
];

const TeamGrid = () => {
	return (
		<div className="container mx-auto px-4 py-16">
			<h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Our Amazing Team</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
				{teamMembers.map((member, index) => (
					<TeamMember key={index} {...member} />
				))}
			</div>
		</div>
	);
};

export default TeamGrid;
