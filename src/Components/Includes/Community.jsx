import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Briefcase, Users, Calendar, Home, HelpCircle, BookOpen, Network } from "lucide-react";

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 items-center">
					<a href="/" className="flex items-center space-x-2">
						<span className="font-bold text-xl">नेपाली नर्वे समुदाय</span>
					</a>
					<nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
						<a href="#jobs" className="text-sm font-medium hover:underline underline-offset-4">
							Jobs
						</a>
						<a href="#friends" className="text-sm font-medium hover:underline underline-offset-4">
							Friends
						</a>
						<a href="#events" className="text-sm font-medium hover:underline underline-offset-4">
							Events
						</a>
						<a href="#rooms" className="text-sm font-medium hover:underline underline-offset-4">
							Rooms
						</a>
						<a href="#visa" className="text-sm font-medium hover:underline underline-offset-4">
							Visa
						</a>
						<a href="#language" className="text-sm font-medium hover:underline underline-offset-4">
							Language
						</a>
						<a href="#networking" className="text-sm font-medium hover:underline underline-offset-4">
							Networking
						</a>
					</nav>
				</div>
			</header>

			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">Welcome to the Nepalese Community in Norway</h1>
								<p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">Connecting Nepalese people in Norway for jobs, friendships, events, and more.</p>
							</div>
							<Button className="bg-white text-primary hover:bg-gray-100">Join Our Community</Button>
						</div>
					</div>
				</section>

				<section id="jobs" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Find Jobs</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<JobCard title="Software Developer" company="TechCo Norway" location="Oslo" />
							<JobCard title="Chef" company="Nepali Restaurant" location="Bergen" />
							<JobCard title="Nurse" company="City Hospital" location="Trondheim" />
						</div>
					</div>
				</section>

				<section id="friends" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Make Friends</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<FriendCard name="Aarav Sharma" interests="Hiking, Photography" location="Oslo" />
							<FriendCard name="Sita Poudel" interests="Cooking, Reading" location="Stavanger" />
							<FriendCard name="Bijay Thapa" interests="Football, Music" location="Tromsø" />
						</div>
					</div>
				</section>

				<section id="events" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Upcoming Events</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<EventCard title="Dashain Celebration" date="October 15, 2023" location="Oslo City Hall" />
							<EventCard title="Nepali Language Workshop" date="November 5, 2023" location="Bergen Public Library" />
							<EventCard title="Nepal-Norway Cultural Exchange" date="December 1, 2023" location="Trondheim University" />
						</div>
					</div>
				</section>

				<section id="rooms" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Find Rooms</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<RoomCard title="Cozy Studio in Oslo" price="6000 NOK/month" location="Grünerløkka, Oslo" />
							<RoomCard title="Shared Apartment" price="4500 NOK/month" location="Sandviken, Bergen" />
							<RoomCard title="Student Housing" price="3800 NOK/month" location="Moholt, Trondheim" />
						</div>
					</div>
				</section>

				<section id="visa" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Visa Information</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<VisaCard title="Student Visa" description="Information about student visas for Nepal citizens" />
							<VisaCard title="Work Visa" description="Requirements for obtaining a work visa in Norway" />
							<VisaCard title="Family Reunification" description="Process for family reunification visas" />
						</div>
					</div>
				</section>

				<section id="language" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Learn Norwegian</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<LanguageCard title="Beginner Course" level="A1-A2" duration="10 weeks" />
							<LanguageCard title="Intermediate Course" level="B1-B2" duration="12 weeks" />
							<LanguageCard title="Advanced Course" level="C1-C2" duration="14 weeks" />
						</div>
					</div>
				</section>

				<section id="networking" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Networking</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<NetworkingCard title="Professional Meetup" date="Every First Tuesday" location="Oslo Business Center" />
							<NetworkingCard title="Startup Weekend" date="Quarterly Event" location="Innovation Norway, Bergen" />
							<NetworkingCard title="Industry Talks" date="Monthly Webinars" location="Online" />
						</div>
					</div>
				</section>
			</main>

			<footer className="w-full border-t py-6">
				<div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© 2023 Nepalese Community in Norway. All rights reserved.</p>
					<nav className="flex gap-4 sm:gap-6">
						<a href="#" className="text-sm font-medium hover:underline underline-offset-4">
							Terms of Service
						</a>
						<a href="#" className="text-sm font-medium hover:underline underline-offset-4">
							Privacy Policy
						</a>
						<a href="#" className="text-sm font-medium hover:underline underline-offset-4">
							Contact Us
						</a>
					</nav>
				</div>
			</footer>
		</div>
	);
}

function JobCard({ title, company, location }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{company}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<Briefcase className="mr-2 h-4 w-4" /> {location}
				</p>
			</CardContent>
		</Card>
	);
}

function FriendCard({ name, interests, location }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{interests}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<Users className="mr-2 h-4 w-4" /> {location}
				</p>
			</CardContent>
		</Card>
	);
}

function EventCard({ title, date, location }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{date}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<Calendar className="mr-2 h-4 w-4" /> {location}
				</p>
			</CardContent>
		</Card>
	);
}

function RoomCard({ title, price, location }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{price}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<Home className="mr-2 h-4 w-4" /> {location}
				</p>
			</CardContent>
		</Card>
	);
}

function VisaCard({ title, description }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<HelpCircle className="mr-2 h-4 w-4" /> {description}
				</p>
			</CardContent>
		</Card>
	);
}

function LanguageCard({ title, level, duration }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>Level: {level}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<BookOpen className="mr-2 h-4 w-4" /> Duration: {duration}
				</p>
			</CardContent>
		</Card>
	);
}

function NetworkingCard({ title, date, location }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{date}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center">
					<Network className="mr-2 h-4 w-4" /> {location}
				</p>
			</CardContent>
		</Card>
	);
}
