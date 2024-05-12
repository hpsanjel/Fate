import React, { useState, useEffect, useRef } from "react";
import GroupingComponent from "./GroupingComponent";

const interestOptions = ["Reading", "Writing", "Presentation", "Communication"];
const musicGenresOptions = ["Pop", "Rock", "Jazz", "Classical", "Hip Hop"];
const sportsOptions = ["Football", "Basketball", "Tennis", "Swimming", "Cycling"];
const studyPlacesOptions = ["Library", "Café", "Park", "Home", "School"];
const learningStylesOptions = ["Visual", "Auditory", "Reading/Writing", "Kinesthetic"];

function Matcher() {
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
	const [userData, setUserData] = useState([]);
	const [matchingData, setMatchingData] = useState([]);
	const [selectedInterests, setSelectedInterests] = useState([]);
	const [selectedMusicGenres, setSelectedMusicGenres] = useState([]);
	const [selectedSports, setSelectedSports] = useState([]);
	const [selectedStudyPlaces, setSelectedStudyPlaces] = useState([]);
	const [selectedLearningStyles, setSelectedLearningStyles] = useState([]);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [showTable, setShowTable] = useState(false);
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (storedData) {
			setUserData(storedData);
		}
	}, []);

	const handleNameChange = (event) => {
		const newName = event.target.value;
		setName(newName);
		if (newName === "") {
			setError("Please enter your name.");
		} else {
			setError("");
		}
	};

	const inputRef = useRef(null);

	const handleSelection = (setState, option, prevSelected) => {
		setState((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	const handleSelectionInterests = (option) => {
		handleSelection(setSelectedInterests, option, selectedInterests);
	};

	const handleSelectionMusicGenres = (option) => {
		handleSelection(setSelectedMusicGenres, option, selectedMusicGenres);
	};

	const handleSelectionSports = (option) => {
		handleSelection(setSelectedSports, option, selectedSports);
	};

	const handleSelectionStudyPlaces = (option) => {
		handleSelection(setSelectedStudyPlaces, option, selectedStudyPlaces);
	};

	const handleSelectionLearningStyles = (option) => {
		handleSelection(setSelectedLearningStyles, option, selectedLearningStyles);
	};

	const handleAddStudent = (e) => {
		e.preventDefault();
		setShowTable(true);
		const categories = [selectedInterests, selectedMusicGenres, selectedSports, selectedStudyPlaces, selectedLearningStyles];
		const minSelectedOptions = 2;
		const formIsValid = categories.every((category) => category.length >= minSelectedOptions);

		if (formIsValid) {
			setFormSubmitted(true);
			const existingData = JSON.parse(localStorage.getItem("userData")) || [];
			const newUser = {
				name,
				Interests: selectedInterests,
				Music: selectedMusicGenres,
				Sports: selectedSports,
				Study_Places: selectedStudyPlaces,
				Learning_Styles: selectedLearningStyles,
			};

			const userExists = existingData.some((user) => user.name === newUser.name);

			if (userExists) {
				setError("User already exists");
			} else {
				if (newUser.name == "") {
					setError("Enter name first");
				} else {
					const updatedData = [...existingData, newUser];
					localStorage.setItem("userData", JSON.stringify(updatedData));
					setUserData(updatedData); // Update state to reflect changes
					alert("User data saved successfully");
					setName("");
				}
			}
		} else {
			alert("Please select at least two options in each category.");
		}
		// Reset form fields
		// setSelectedInterests([]);
		// setSelectedMusicGenres([]);
		// setSelectedSports([]);
		// setSelectedStudyPlaces([]);
		// setSelectedLearningStyles([]);
		inputRef.current.focus();
	};

	useEffect(() => {
		findBestMatch();
	}, [selectedInterests, selectedMusicGenres, selectedSports, selectedStudyPlaces, selectedLearningStyles]);

	const findBestMatch = () => {
		const currentUserData = {
			Interests: selectedInterests,
			Music: selectedMusicGenres,
			Sports: selectedSports,
			Study_Places: selectedStudyPlaces,
			Learning_Styles: selectedLearningStyles,
		};

		const matches = userData.map((user) => {
			let commonValues = {};

			for (const category in currentUserData) {
				const currentUserCategoryValues = currentUserData[category];
				const userCategoryValues = user[category] || []; // Handle undefined userCategoryValues

				const commonCategoryValues = currentUserCategoryValues.filter((value) => {
					return userCategoryValues.includes(value);
				});

				if (commonCategoryValues.length > 0) {
					commonValues[category] = commonCategoryValues;
				}
			}

			const commonValuesCount = Object.keys(commonValues).length;
			const totalValuesCount = Object.values(commonValues).reduce((total, values) => total + values.length, 0);

			const totalOptionsCount = Object.values(currentUserData).flat().length;

			// Handle division by zero by setting percentageMatch to 0 if totalOptionsCount is 0
			const percentageMatch = totalOptionsCount === 0 ? 0 : ((totalValuesCount / totalOptionsCount) * 100).toFixed(2);

			return {
				name: user.name,
				commonValues: commonValues,
				commonValuesCount: commonValuesCount,
				percentageMatch: percentageMatch,
				totalValuesCount: totalValuesCount,
			};
		});

		const sortedMatches = matches.sort((a, b) => b.percentageMatch - a.percentageMatch);

		setMatchingData(sortedMatches);
	};

	const calculateSimilarity = (student1, student2) => {
		const categories = ["Interests", "Music", "Sports", "Study_Places", "Learning_Styles"];
		let similarityCount = 0;

		categories.forEach((category) => {
			const options1 = student1[category] || [];
			const options2 = student2[category] || [];

			options1.forEach((option1) => {
				if (options2.includes(option1)) {
					similarityCount++;
				}
			});
		});

		return similarityCount;
	};

	// Function to group students
	const groupStudentsIntoThrees = (students) => {
		const groups = [];
		const visited = new Set();

		students.forEach((student) => {
			if (!visited.has(student)) {
				const group = [student];
				visited.add(student);

				students.forEach((otherStudent) => {
					if (!visited.has(otherStudent) && calculateSimilarity(student, otherStudent) > 0) {
						group.push(otherStudent);
						visited.add(otherStudent);
					}
				});

				if (group.length === 3) {
					groups.push(group);
				} else if (group.length > 3) {
					// Split larger groups into smaller groups of three
					for (let i = 0; i < group.length; i += 3) {
						groups.push(group.slice(i, i + 3));
					}
				}
			}
		});

		return groups;
	};

	const groupedStudents = groupStudentsIntoThrees(userData);
	console.log(groupedStudents);

	return (
		<>
			{" "}
			{/* <GroupingComponent /> */}
			<div className="container mx-auto p-20 my-4 grid grid-cols-12 gap-16 w-75% bg-slate-50 rounded-3xl shadow-lg">
				<form className="space-y-2 col-span-4 bg-blue-100/70 p-6">
					<label className="block">
						Name:
						<input type="text" name={name} ref={inputRef} autoComplete="true" value={name} onChange={handleNameChange} className={`w-full border border-gray-300 rounded-3xl px-3 py-2 ${error ? "border-1 border-red-500 bg-red-50" : ""}`} />
					</label>
					<h1 className="text-red-500">{error}</h1>

					<label className="block font-medium">Select at least two interests:</label>

					<div className="flex flex-wrap">
						{interestOptions.map((option) => (
							<button key={option} name={option} type="button" className={`m-1 px-3 py-2 rounded-3xl ${selectedInterests.includes(option) ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"} text-sm hover:bg-blue-500 hover:text-white border border-blue-500`} onClick={() => handleSelectionInterests(option)}>
								{option}
							</button>
						))}
					</div>

					<label className="block font-medium">Select your music genres:</label>
					<div className="flex flex-wrap">
						{musicGenresOptions.map((option) => (
							<button key={option} name={option} type="button" className={`m-1 px-3 py-2 rounded-3xl ${selectedMusicGenres.includes(option) ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"} text-sm hover:bg-blue-500 hover:text-white border border-blue-500`} onClick={() => handleSelectionMusicGenres(option)}>
								{option}
							</button>
						))}
					</div>

					<label className="block font-medium">Select Sports:</label>
					<div className="flex flex-wrap">
						{sportsOptions.map((option) => (
							<button key={option} name={option} type="button" className={`m-1 px-3 py-2 rounded-3xl ${selectedSports.includes(option) ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"} text-sm hover:bg-blue-500 hover:text-white border border-blue-500`} onClick={() => handleSelectionSports(option)}>
								{option}
							</button>
						))}
					</div>

					<label className="block font-medium">Select your study places:</label>
					<div className="flex flex-wrap">
						{studyPlacesOptions.map((option) => (
							<button key={option} name={option} type="button" className={`m-1 px-3 py-2 rounded-3xl ${selectedStudyPlaces.includes(option) ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"} text-sm hover:bg-blue-500 hover:text-white border border-blue-500`} onClick={() => handleSelectionStudyPlaces(option)}>
								{option}
							</button>
						))}
					</div>

					<label className="block font-medium">Select your learning styles:</label>
					<div className="flex flex-wrap">
						{learningStylesOptions.map((option) => (
							<button key={option} name={option} type="button" className={`m-1 px-3 py-2 rounded-3xl ${selectedLearningStyles.includes(option) ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"} text-sm hover:bg-blue-500 hover:text-white border border-blue-500`} onClick={() => handleSelectionLearningStyles(option)}>
								{option}
							</button>
						))}
					</div>

					<button type="submit" onClick={handleAddStudent} className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-3xl ${isAddButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`} disabled={isAddButtonDisabled}>
						Submit for match{" "}
					</button>
				</form>
				<div className="relative col-span-8 bg-blue-100/70 p-6">
					{showTable ? (
						<div className="">
							<div className="flex items-center justify-between">
								<h2 className="text-2xl font-bold mb-4 text-green-800">Best Matches</h2>
							</div>
							<table className=" max-h-screen table-auto w-full border-collapse border border-gray-800">
								<thead>
									<tr className="bg-blue-500 text-white">
										<th className="border border-gray-800 px-4 py-2">SN</th>
										<th className="border border-gray-800 px-4 py-2">Name</th>
										<th className="border border-gray-800 px-4 py-2">Common Values</th>
										<th className="border border-gray-800 px-4 py-2">Match Percentage</th>
										<th className="border border-gray-800 px-4 py-2">Matched Values Count</th>
									</tr>
								</thead>
								<tbody>
									{matchingData.map((match, index) => (
										<tr key={index} className={Object.keys(match.commonValues).length === 0 ? "bg-red-50" : "bg-green-200"}>
											<td className="border border-gray-800 px-4 py-2">{index + 1}</td>
											<td className="border border-gray-800 px-4 py-2">{match.name}</td>
											<td className="border border-gray-800 px-4 py-2">
												{Object.keys(match.commonValues).length > 0 ? (
													<ul>
														{Object.keys(match.commonValues).map((category, i) => (
															<li key={i} className="mb-2">
																<p className=" font-semibold">{category}:</p>
																{match.commonValues[category].join(", ")}
																<br />
															</li>
														))}
													</ul>
												) : (
													"No common values"
												)}
											</td>
											<td className="border border-gray-800 px-4 py-2 text-3xl">{match.percentageMatch}%</td>
											<td className="border border-gray-800 px-4 py-2">{match.totalValuesCount}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<div className="text-center">
							<img src="./images/group.jpeg"></img>
							<h3 className="text-3xl mt-12 font-semibold">Find your perfect study buddy</h3>
							<p className="mt-2 px-32 pt-4 pb-12 border-b-2 border-slate-400">You just need to enter your name and select at least 2 options from each category given in the left panel.</p>
							<h4 className="mt-4 px-32 text-sm">
								Developed by <span className="font-semibold">Hari Sanjel</span>
							</h4>
							<p className="text-sm">Oslomet University</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Matcher;
