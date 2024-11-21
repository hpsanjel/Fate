import React, { useState } from "react";
import { Mail, Phone, Award } from "lucide-react";

const TeamMember = ({ name, role, photo, email, phone, linkedin, bio }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="relative w-full h-[400px] rounded-2xl overflow-hidden group cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			{/* Full-size image */}
			<img src={photo} alt={name} className="w-full h-full object-cover object-center" />

			{/* Overlay that slides up */}
			<div
				className={`absolute inset-0 bg-gradient-to-br from-fatePrimary to-green-900
            transform transition-transform duration-500 ease-out
            ${isHovered ? "translate-y-0" : "translate-y-full"}`}
			/>

			{/* Award badge - always visible but transforms on hover */}
			<div
				className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full 
          transform transition-all duration-500 shadow-lg
          ${isHovered ? "rotate-12 scale-110" : "rotate-0"}`}
			>
				<Award className="w-6 h-6 text-blue-600" />
			</div>

			{/* Basic info - visible before hover */}
			<div
				className={`absolute bottom-0 left-0 right-0 p-6 text-white
          transform transition-all duration-500 ease-out
          ${isHovered ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
			>
				<h3 className="text-2xl font-bold">{name}</h3>
				<p className="text-white/90">{role}</p>
			</div>

			{/* Detailed info - revealed on hover */}
			<div
				className={`absolute inset-0 p-8 text-white flex flex-col
          transform transition-all duration-500 delay-100
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
			>
				<div className="mt-auto space-y-6">
					<div>
						<h3 className="text-3xl font-bold mb-2">{name}</h3>
						<p className="text-xl text-white/90 mb-4">{role}</p>
						<p className="text-white/80 leading-relaxed">{bio}</p>
					</div>

					<div className="space-y-2">
						<div className="flex items-center gap-3 text-white/90">
							<Mail className="w-5 h-5" />
							{email}
						</div>
						<div className="flex items-center gap-3 text-white/90">
							<Phone className="w-5 h-5" />
							{phone}
						</div>
					</div>
					{/* 
					<div className="flex gap-3 pt-4">
						{member.expertise.map((skill, index) => (
							<span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
								{skill}
							</span>
						))}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
