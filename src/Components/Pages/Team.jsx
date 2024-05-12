import React from "react";
import { teamMembers } from "./TeamMembers";
import TeamMember from "./TeamMember";

const Team = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{teamMembers.map((member) => (
					<TeamMember key={member.name} {...member} />
				))}
			</div>
		</section>
	);
};

export default Team;
