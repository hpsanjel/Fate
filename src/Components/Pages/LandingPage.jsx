import React, { useState } from "react";

// Sample translations
const translations = {
	en: {
		title: "Population Register Service",
		description: "Register Birth or Death Record",
		nameLabel: "Full Name",
		dobLabel: "Date of Birth",
		dodLabel: "Date of Death",
		genderLabel: "Gender",
		genderOptions: ["Male", "Female", "Other"],
		emailLabel: "Email",
		phoneLabel: "Phone Number",
		submitButton: "Submit",
		changeLanguage: "Change to Nepali",
	},
	np: {
		title: "जनसंख्या दर्ता सेवा",
		description: "जन्म वा मृत्यु रेकर्ड दर्ता गर्नुहोस्",
		nameLabel: "पूरा नाम",
		dobLabel: "जन्म मिति",
		dodLabel: "मृत्यु मिति",
		genderLabel: "लिङ्ग",
		genderOptions: ["पुरुष", "महिला", "अन्य"],
		emailLabel: "ईमेल",
		phoneLabel: "फोन नम्बर",
		submitButton: "पेश गर्नुहोस्",
		changeLanguage: "Change to English",
	},
};

const LandingPage = () => {
	const [language, setLanguage] = useState("en");
	const [formData, setFormData] = useState({
		name: "",
		dob: "",
		dod: "",
		gender: "",
		email: "",
		phone: "",
	});
	const [darkMode, setDarkMode] = useState(false);
	const [fontSize, setFontSize] = useState(16);

	const handleChangeLanguage = () => {
		setLanguage(language === "en" ? "np" : "en");
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
	};

	const t = translations[language];

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const handleFontSizeChange = (increment) => {
		setFontSize((prevFontSize) => {
			let newSize = prevFontSize + increment;
			if (newSize < 10) newSize = 10; // minimum font size
			if (newSize > 22) newSize = 22; // maximum font size
			return newSize;
		});
	};

	const handleTextToSpeech = (text) => {
		const speech = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(speech);
	};

	return (
		<div className={`min-h-screen flex flex-col items-center justify-center p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
			<div className={`rounded-lg shadow-lg p-8 max-w-md w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}>
				<button onClick={handleChangeLanguage} className={`px-4 py-2 rounded-lg mb-4 ${darkMode ? "bg-blue-500 text-white" : "bg-red-600 text-white"}`}>
					{t.changeLanguage}
				</button>
				<button onClick={toggleDarkMode} className={`px-4 py-2 rounded-lg mb-4 ${darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"}`}>
					{darkMode ? "Light Mode" : "Dark Mode"}
				</button>
				<div className="mb-4">
					<button onClick={() => handleFontSizeChange(-2)} className="px-2 py-1 bg-gray-200 rounded-lg mr-2">
						A-
					</button>
					<button onClick={() => handleFontSizeChange(2)} className="px-2 py-1 bg-gray-200 rounded-lg mr-2">
						A+
					</button>
				</div>
				<h1 className="text-3xl font-bold text-center mt-12" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.title)}>
					{t.title}
				</h1>
				<p className="text-center text-gray-600 mb-8" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.description)}>
					{t.description}
				</p>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.nameLabel)}>
							{t.nameLabel}
						</label>
						<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
					</div>
					<div>
						<label htmlFor="dob" className="block text-sm font-medium" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.dobLabel)}>
							{t.dobLabel}
						</label>
						<input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
					</div>
					<div>
						<label htmlFor="dod" className="block text-sm font-medium" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.dodLabel)}>
							{t.dodLabel}
						</label>
						<input type="date" id="dod" name="dod" value={formData.dod} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
					</div>
					<div>
						<label htmlFor="gender" className="block text-sm font-medium" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.genderLabel)}>
							{t.genderLabel}
						</label>
						<select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md">
							{t.genderOptions.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.emailLabel)}>
							{t.emailLabel}
						</label>
						<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-medium" style={{ fontSize: `${fontSize}px` }} onClick={() => handleTextToSpeech(t.phoneLabel)}>
							{t.phoneLabel}
						</label>
						<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
					</div>
					<button type="submit" className="w-full py-2 px-4 rounded-md bg-blue-700 text-white hover:bg-blue-800" style={{ fontSize: `${fontSize}px` }}>
						{t.submitButton}
					</button>
				</form>
			</div>
		</div>
	);
};

export default LandingPage;
