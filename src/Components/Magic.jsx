import React from "react";
import { Link } from "react-router-dom";

export default function Component() {
	return (
		<>
			<header className="w-full bg-gray-100 py-6 dark:bg-gray-800">
				<div className="container mx-auto flex items-center justify-between px-4 md:px-6">
					<Link className="flex items-center" href="#">
						<CalendarDaysIcon className="h-8 w-8 text-primary-500" />
						<span className="ml-2 text-xl font-bold">Sunshine Daycare</span>
					</Link>
					<nav className="hidden space-x-4 md:flex">
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							About
						</Link>
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							Gallery
						</Link>
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							Staff
						</Link>
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							Services
						</Link>
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							Contact
						</Link>
					</nav>
					<button className="hidden md:inline-flex" variant="primary">
						Enroll Now
					</button>
				</div>
			</header>
			<main>
				<section className="w-full bg-gray-100 py-20 dark:bg-gray-800">
					<div className="container mx-auto px-4 md:px-6">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div className="space-y-4">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Welcome to Sunshine Daycare</h1>
								<p className="text-lg text-gray-600 dark:text-gray-400">Nurturing young minds, one smile at a time.</p>
								<button variant="primary">Enroll Now</button>
							</div>
							<div className="flex items-center justify-center">
								<img
									alt="Daycare"
									className="h-auto w-full max-w-md rounded-lg object-cover"
									height="400"
									src="/placeholder.svg"
									style={{
										aspectRatio: "400/400",
										objectFit: "cover",
									}}
									width="400"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-20" id="about">
					<div className="container mx-auto px-4 md:px-6">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Our Philosophy</h2>
								<p className="text-gray-600 dark:text-gray-400">At Sunshine Daycare, we believe in nurturing the whole child. Our approach focuses on fostering social, emotional, and cognitive development through engaging activities and a nurturing environment.</p>
								<p className="text-gray-600 dark:text-gray-400">We understand that every child is unique, and we tailor our curriculum to meet the individual needs of each student. Our experienced staff is dedicated to providing a safe, inclusive, and stimulating space for children to learn and grow.</p>
							</div>
							<div className="flex items-center justify-center">
								<img
									alt="Daycare Philosophy"
									className="h-auto w-full max-w-md rounded-lg object-cover"
									height="400"
									src="/placeholder.svg"
									style={{
										aspectRatio: "400/400",
										objectFit: "cover",
									}}
									width="400"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-gray-100 py-20 dark:bg-gray-800" id="gallery">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Our Facilities</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<img
								alt="Daycare Facility 1"
								className="h-auto w-full rounded-lg object-cover"
								height="300"
								src="/placeholder.svg"
								style={{
									aspectRatio: "300/300",
									objectFit: "cover",
								}}
								width="300"
							/>
							<img
								alt="Daycare Facility 2"
								className="h-auto w-full rounded-lg object-cover"
								height="300"
								src="/placeholder.svg"
								style={{
									aspectRatio: "300/300",
									objectFit: "cover",
								}}
								width="300"
							/>
							<img
								alt="Daycare Facility 3"
								className="h-auto w-full rounded-lg object-cover"
								height="300"
								src="/placeholder.svg"
								style={{
									aspectRatio: "300/300",
									objectFit: "cover",
								}}
								width="300"
							/>
							<img
								alt="Daycare Facility 4"
								className="h-auto w-full rounded-lg object-cover"
								height="300"
								src="/placeholder.svg"
								style={{
									aspectRatio: "300/300",
									objectFit: "cover",
								}}
								width="300"
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-20" id="staff">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Meet Our Experienced Staff</h2>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<div className="space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
								{/* <Avatar>
									<AvatarImage alt="Staff 1" src="/avatars/01.png" />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar> */}
								<h3 className="text-lg font-bold">Jane Doe</h3>
								<p className="text-gray-600 dark:text-gray-400">Lead Teacher</p>
								<p className="text-gray-600 dark:text-gray-400">10+ years of experience in early childhood education.</p>
							</div>
							<div className="space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
								{/* <Avatar>
									<AvatarImage alt="Staff 2" src="/avatars/02.png" />
									<AvatarFallback>JB</AvatarFallback>
								</Avatar> */}
								<h3 className="text-lg font-bold">John Bauer</h3>
								<p className="text-gray-600 dark:text-gray-400">Assistant Teacher</p>
								<p className="text-gray-600 dark:text-gray-400">5 years of experience in early childhood education.</p>
							</div>
							<div className="space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
								{/* <Avatar>
									<AvatarImage alt="Staff 3" src="/avatars/03.png" />
									<AvatarFallback>SA</AvatarFallback>
								</Avatar> */}
								<h3 className="text-lg font-bold">Sarah Anderson</h3>
								<p className="text-gray-600 dark:text-gray-400">Curriculum Coordinator</p>
								<p className="text-gray-600 dark:text-gray-400">8 years of experience in early childhood education.</p>
							</div>
							<div className="space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
								{/* <Avatar>
									<AvatarImage alt="Staff 4" src="/avatars/04.png" />
									<AvatarFallback>MR</AvatarFallback>
								</Avatar> */}
								<h3 className="text-lg font-bold">Michael Roberts</h3>
								<p className="text-gray-600 dark:text-gray-400">Daycare Director</p>
								<p className="text-gray-600 dark:text-gray-400">15+ years of experience in early childhood education.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-gray-100 py-20 dark:bg-gray-800" id="services">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Our Services</h2>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
							<div className="space-y-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
								<CalendarDaysIcon className="h-8 w-8 text-primary-500" />
								<h3 className="text-lg font-bold">Daycare</h3>
								<p className="text-gray-600 dark:text-gray-400">Providing a safe and nurturing environment for children ages 6 weeks to 5 years.</p>
							</div>
							<div className="space-y-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
								<SchoolIcon className="h-8 w-8 text-primary-500" />
								<h3 className="text-lg font-bold">Preschool</h3>
								<p className="text-gray-600 dark:text-gray-400">Preparing children for a smooth transition to kindergarten with our engaging curriculum.</p>
							</div>
							<div className="space-y-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
								<SchoolIcon className="h-8 w-8 text-primary-500" />
								<h3 className="text-lg font-bold">Afterschool Care</h3>
								<p className="text-gray-600 dark:text-gray-400">Providing a safe and enriching environment for school-age children.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-20" id="contact">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Contact Us</h2>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div className="space-y-4">
								<p className="text-gray-600 dark:text-gray-400">Have questions or ready to enroll? Get in touch with us today!</p>
								<div className="flex items-center space-x-2">
									<PhoneIcon className="h-6 w-6 text-primary-500" />
									<p className="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
								</div>
								<div className="flex items-center space-x-2">
									<MailIcon className="h-6 w-6 text-primary-500" />
									<p className="text-gray-600 dark:text-gray-400">info@sunshinedaycare.com</p>
								</div>
								<div className="flex items-center space-x-2">
									<LocateIcon className="h-6 w-6 text-primary-500" />
									<p className="text-gray-600 dark:text-gray-400">123 Main Street, Anytown USA</p>
								</div>
							</div>
							<div>
								<div>
									<h1>Inquiry Form</h1>
									<p>Fill out the form below to get in touch with us.</p>
								</div>
								<div className="space-y-4">
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<div className="space-y-1">
											<label htmlFor="name">Name</label>
											<input id="name" placeholder="Enter your name" type="text" />
										</div>
										<div className="space-y-1">
											<label htmlFor="email">Email</label>
											<input id="email" placeholder="Enter your email" type="email" />
										</div>
									</div>
									<div className="space-y-1">
										<label htmlFor="message">Message</label>
										<textarea id="message" placeholder="Enter your message" />
									</div>
								</div>
								<div>
									<button variant="primary">Submit</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full bg-gray-100 py-6 dark:bg-gray-800">
				<div className="container mx-auto flex items-center justify-between px-4 md:px-6">
					<p className="text-gray-600 dark:text-gray-400">© 2024 Sunshine Daycare. All rights reserved.</p>
					<div className="flex space-x-4">
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							Privacy Policy
						</Link>
						<Link className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400" href="#">
							Terms of Service
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}

function CalendarDaysIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
			<path d="M8 14h.01" />
			<path d="M12 14h.01" />
			<path d="M16 14h.01" />
			<path d="M8 18h.01" />
			<path d="M12 18h.01" />
			<path d="M16 18h.01" />
		</svg>
	);
}

function LocateIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<line x1="2" x2="5" y1="12" y2="12" />
			<line x1="19" x2="22" y1="12" y2="12" />
			<line x1="12" x2="12" y1="2" y2="5" />
			<line x1="12" x2="12" y1="19" y2="22" />
			<circle cx="12" cy="12" r="7" />
		</svg>
	);
}

function MailIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

function PhoneIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	);
}

function SchoolIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M14 22v-4a2 2 0 1 0-4 0v4" />
			<path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
			<path d="M18 5v17" />
			<path d="m4 6 8-4 8 4" />
			<path d="M6 5v17" />
			<circle cx="12" cy="9" r="2" />
		</svg>
	);
}
