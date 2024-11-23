import React from "react";
import SectionHeader from "../../Includes/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { DollarSign, Award, Target, BookOpen, Clock, School, Globe, Star, Calendar, Users, Briefcase, Building, Plane } from "lucide-react";
import Banner from "../../Includes/Banner";

const LanguageclassNamees = () => {
	const pageTitle = "Langauge Classes";
	const breadcrumbs = ["Home", "Language Classes"];
	const bgimage = 'url("/images/headerbanner.png")';

	const courses = [
		{
			id: 1,
			level: "Basic Level",
			duration: "1 year (4 semesters)",
			hours: "90 min/day",
			fee: "4500/per semester",
			remarks: "able to participate for JLPT N5 & N4 level",
		},
		{
			id: 2,
			level: "Intermediate Level",
			duration: "3 months (1 semester)",
			hours: "90 min/day",
			fee: "5500/per semester",
			remarks: "able to participate for JLPT N3 level",
		},
		{
			id: 3,
			level: "Advance Level",
			duration: "9 months (3 semesters)",
			hours: "90 min/day",
			fee: "6500/per semester",
			remarks: "able to participate for JLPT N2 level",
		},
	];

	const attendees = [
		{
			icon: <Plane className="w-6 h-6" />,
			text: "Anyone planning to relocate to Japan and attend a Japanese course in order to prepare in advance for their assignment.",
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			text: "Those who are planning to go and work in Japan.",
		},
		{
			icon: <Building className="w-6 h-6" />,
			text: "Government and non governmental agency representatives working in Japan who needs to be able to communicate at all levels.",
		},
		{
			icon: <Users className="w-6 h-6" />,
			text: "Tourist guide professionals, hotel and restaurant workers.",
		},
	];

	const achievements = [
		{ text: "Demonstrate goodwill in international communication", icon: <Globe className="w-5 h-5" /> },
		{ text: "Build rapport with Japanese colleagues", icon: <Users className="w-5 h-5" /> },
		{ text: "Strengthen business relationships", icon: <Star className="w-5 h-5" /> },
	];

	const environment = [
		{ text: "Small class sizes for personalized attention", icon: <School className="w-5 h-5" /> },
		{ text: "Flexible duration: 4 weeks to 1 year", icon: <Calendar className="w-5 h-5" /> },
		{ text: "Trilingual course materials", icon: <BookOpen className="w-5 h-5" /> },
	];
	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />

			<SectionHeader firstline="Why Study in Japan" firstheading="Language Classes" shortdesc="Get to know more why Japan might be your best destination for study, work and live" />
			<div className="w-full mx-auto mb-12 p-6">
				<h1 className="text-3xl text-fatePrimary mb-8">Language Classes Level</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{courses.map((course) => (
						<Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
							<CardHeader className="bg-gradient-to-r from-fatePrimary to-fatePrimary/70 text-white">
								<CardTitle className="text-2xl font-bold">{course.level}</CardTitle>
							</CardHeader>
							<CardContent className="p-6 space-y-4">
								<div className="flex items-center gap-2 text-gray-700">
									<Calendar className="w-5 h-5 text-fatePrimary" />
									<span>{course.duration}</span>
								</div>

								<div className="flex items-center gap-2 text-gray-700">
									<Clock className="w-5 h-5 text-fatePrimary" />
									<span>{course.hours}</span>
								</div>

								<div className="flex items-center gap-2 text-gray-700">
									<DollarSign className="w-5 h-5 text-fatePrimary" />
									<span>NRs. {course.fee}</span>
								</div>

								<div className="flex items-center gap-2 text-gray-700">
									<Award className="w-5 h-5 text-fatePrimary" />
									<span>{course.remarks}</span>
								</div>
								<div>
									<button className="bg-fatePrimary text-white px-4 py-2 rounded-md hover:bg-fatePrimary/90 transition-colors duration-300">Enroll Now</button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			<div className="language-wrapper p-6 md-p-0">
				<div className="private mb-16">
					<h1 className="text-3xl text-fatePrimary">Private Classes</h1>
					<div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-8">
						<div className="flex flex-col items-center gap-y-1 py-12 rounded-md hover:shadow-md border border-transparent transition-all ease-in duration-300 hover:border-fatePrimary  bg-fatePrimary/10 hover:text-fatePrimary/90">
							<i className="bi bi-calendar-range sm:text-5xl text-3xl mb-2 "></i>
							<h3 className="text-lg font-medium">Duration</h3>
							<p>As per your demand</p>
							{/* <p>1 week</p> */}
						</div>
						<div className="flex flex-col items-center gap-y-1 py-12 rounded-md hover:shadow-md border border-transparent transition-all ease-in duration-300 hover:border-fatePrimary  bg-fatePrimary/10 hover:text-fatePrimary/90">
							<i className="bi bi-hourglass sm:text-5xl text-3xl mb-2 "></i>
							<h3 className="text-lg font-medium">Teaching Hours</h3>
							<p>60 min/day</p>
							{/* <p>180 min/day</p> */}
						</div>
						<div className="flex flex-col items-center gap-y-1 py-12 rounded-md hover:shadow-md border border-transparent transition-all ease-in duration-300 hover:border-fatePrimary  bg-fatePrimary/10 hover:text-fatePrimary/90">
							<i className="bi bi-clock sm:text-5xl text-3xl mb-2 "></i>
							<h3 className="text-lg font-medium">Class Time</h3>
							<p>Negotiable</p>
							{/* <p>7 am to 10 am</p> */}
						</div>
						<div className="flex flex-col items-center gap-y-1 py-12 rounded-md hover:shadow-md border border-transparent transition-all ease-in duration-300 hover:border-fatePrimary  bg-fatePrimary/10 hover:text-fatePrimary/90">
							<i className="bi bi-cash-coin sm:text-5xl text-3xl mb-2 "></i>
							<h3 className="text-lg font-medium">Fee</h3>
							<p>5000/month</p>
							{/* <p>Free</p> */}
						</div>
					</div>
				</div>

				<div className="private mb-16">
					<h1 className="text-3xl text-fatePrimary mb-8">Language Approach and Processing</h1>
					<div className="relative overflow-hidden bg-gradient-to-br from-fatePrimary/10 to-blue-50 p-8 rounded-3xl">
						<div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 items-center relative">
							{/* Left column with Japanese writing info */}
							<div className="space-y-6">
								<h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-red-200 pb-2">日本語 Japanese Language</h2>

								<div className="prose prose-lg text-gray-600 space-y-4">
									<p className="leading-relaxed"> Japanese is written in a mixture of Hiragana, Katakana and Kanji. The Japanese initially adopted Chinese writing script for its written language. However, over time, Chinese character (Kanji) were supplemented by two other types of scripts were developed. Hiragana and Katakana are both syllabicated, where each character is representative of a syllable.</p>

									<div className="flex gap-4 my-6">
										<div className="bg-white p-4 rounded-xl shadow-sm flex-1 text-center">
											<div className="text-2xl font-bold text-red-500">ひらがな</div>
											<div className="text-sm">Hiragana</div>
										</div>
										<div className="bg-white p-4 rounded-xl shadow-sm flex-1 text-center">
											<div className="text-2xl font-bold text-blue-500">カタカナ</div>
											<div className="text-sm">Katakana</div>
										</div>
										<div className="bg-white p-4 rounded-xl shadow-sm flex-1 text-center">
											<div className="text-2xl font-bold text-green-500">漢字</div>
											<div className="text-sm">Kanji</div>
										</div>
									</div>

									<p className="leading-relaxed"> The education training process with as an aspect of social interaction with the view of the institution as a social group. The institution with the preliminary perspectives and designs the study course on the basis of student's requirement. Many students begin with an approach to study module, but all modules fully integrate guidance on study skills with study of the subject. Teaching methods includes talks, discussion, group work, visits, videos and presentations. The content and format of your Japanese training course will depend on your profession, proficiency in Japanese and objectives. Whether beginner, survival, intermediate or advanced, we provide satisfaction and confidence at any of your areas you meet.</p>
								</div>
							</div>

							{/* Right column with attendee info */}
							<div className="lg:pl-8">
								<Card className="bg-white/80 backdrop-blur-sm">
									<CardContent className="p-6">
										<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Who should attend our Japanese Classes?</h3>

										<div className="grid gap-4">
											{attendees.map((item, index) => (
												<div key={index} className="group bg-gradient-to-r from-fateSecondaryLight/20 to-fatePrimary/5 p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-102 flex items-start gap-4">
													<div className="bg-white p-2 rounded-lg shadow-sm text-fatePrimary group-hover:text-fatePrimary/70 transition-colors">{item.icon}</div>
													<p className="text-gray-700 flex-1">{item.text}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>

				<div className="relative w-full overflow-hidden bg-gradient-to-br from-fatePrimary/10 to-fateSecondaryDark/10 p-8 mb-12 rounded-3xl">
					<div className="relative grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-2">
						{/* Achievement Section */}
						<div className="group relative">
							<div className="absolute inset-0 bg-gradient-to-r from-fateSecondaryDark to-fatePrimary rounded-3xl transform -rotate-2 opacity-10 group-hover:rotate-0 transition-transform duration-300" />
							<Card className="relative bg-white/80 backdrop-blur-sm overflow-hidden border-none shadow-xl">
								<CardContent className="p-8">
									<div className="flex items-center gap-3 mb-6">
										<Target className="w-8 h-8 text-fatePrimary" />
										<h2 className="text-3xl font-bold text-gray-800">Achievement</h2>
									</div>

									<p className="text-gray-600 mb-8 leading-relaxed">Demonstrate goodwill and facilitate international communication at both a personal and organizational level. Build report and strengthen relationship with Japanese speaking colleagues and clients.</p>

									<div className="space-y-4">
										{achievements.map((item, index) => (
											<div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-fatePrimary/10 to-slate-100 rounded-xl transform hover:scale-102 transition-all duration-300">
												<div className="bg-white p-2 rounded-lg shadow-sm text-fatePrimary">{item.icon}</div>
												<p className="text-gray-700">{item.text}</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Environment Section */}
						<div className="group relative">
							<div className="absolute inset-0 bg-gradient-to-r from-fateSecondaryDark to-fatePrimary rounded-3xl transform rotate-2 opacity-10 group-hover:rotate-0 transition-transform duration-300" />
							<Card className="relative bg-white/80 backdrop-blur-sm overflow-hidden border-none shadow-xl">
								<CardContent className="p-8">
									<div className="flex items-center gap-3 mb-6">
										<School className="w-8 h-8 text-fateSecondaryDark" />
										<h2 className="text-3xl font-bold text-gray-800">Environment</h2>
									</div>

									<p className="text-gray-600 mb-8 leading-relaxed">Classes are small, giving you plenty of time with our highly qualified instructor. Experience Japanese language and culture first hand with flexible study options.</p>

									<div className="space-y-4">
										{environment.map((item, index) => (
											<div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-fateSecondaryLight/30 to-slate-100 rounded-xl transform hover:scale-102 transition-all duration-300">
												<div className="bg-white p-2 rounded-lg shadow-sm  text-fateSecondaryDark">{item.icon}</div>
												<p className="text-gray-700">{item.text}</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LanguageclassNamees;
