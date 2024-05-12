import React, { useState, useEffect } from "react";
import InterestOptions from "./InterestOptions";
import MusicGenresOptions from "./MusicGenresOptions";
import SportsOptions from "./SportsOptions";
import StudyPlacesOptions from "./StudyPlacesOptions";
import LearningStylesOptions from "./LearningStylesOptions";
import MatchResults from "./MatchResults";
import Form from "./Form";
import MatchTable from "./MatchTable";

function Matcher() {
	const [error, setError] = useState("");
	const [studentData, setStudentData] = useState([]);
	const [name, setName] = useState("");
	const [bgColor, setBgColor] = useState("bg-blue-500");
	const [matches, setMatches] = useState([]);
	const [selected, setSelected] = useState([]);
	const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
	const [userData, setUserData] = useState([]);
	const [matchingData, setMatchingData] = useState([]);
	const [selectedInterests, setSelectedInterests] = useState([]);
	const [selectedMusicGenres, setSelectedMusicGenres] = useState([]);
	const [selectedSports, setSelectedSports] = useState([]);
	const [selectedStudyPlaces, setSelectedStudyPlaces] = useState([]);
	const [selectedLearningStyles, setSelectedLearningStyles] = useState([]);
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (storedData) {
			setUserData(storedData);
		}
	}, []);

	const handleAddStudent = (e) => {
		e.preventDefault();
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
		setSelectedInterests([]);
		setSelectedMusicGenres([]);
		setSelectedSports([]);
		setSelectedStudyPlaces([]);
		setSelectedLearningStyles([]);
		inputRef.current.focus();
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
		setError("");
	};

	const handleSelectionInterests = (option) => {
		setSelectedInterests((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	const handleSelectionMusicGenres = (option) => {
		setSelectedMusicGenres((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	const handleSelectionSports = (option) => {
		setSelectedSports((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	const handleSelectionStudyPlaces = (option) => {
		setSelectedStudyPlaces((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	const handleSelectionLearningStyles = (option) => {
		setSelectedLearningStyles((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	return (
		<div className="container mx-auto p-20 my-4 grid grid-cols-12 gap-16 w-75% bg-slate-50 rounded-3xl shadow-lg">
			<Form onSubmit={handleAddStudent} error={error} selectedInterests={selectedInterests} selectedMusicGenres={selectedMusicGenres} selectedSports={selectedSports} selectedStudyPlaces={selectedStudyPlaces} selectedLearningStyles={selectedLearningStyles} handleNameChange={handleNameChange} handleSelectionInterests={handleSelectionInterests} handleSelectionMusicGenres={handleSelectionMusicGenres} handleSelectionSports={handleSelectionSports} handleSelectionStudyPlaces={handleSelectionStudyPlaces} handleSelectionLearningStyles={handleSelectionLearningStyles} />
			<div className="relative col-span-8 bg-blue-100/70 p-6">
				<MatchResults userData={userData} />
			</div>
			<div className="space-y-2 col-span-4 bg-blue-100/70 p-6">
				<InterestOptions />
				<MusicGenresOptions />
				<SportsOptions />
				<StudyPlacesOptions />
				<LearningStylesOptions />
				<MatchTable />
			</div>
		</div>
	);
}

export default Matcher;
