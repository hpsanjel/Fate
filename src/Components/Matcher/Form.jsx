import React, { useState, useRef } from "react";

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

const Form = ({ onSubmit, error, selectedInterests, selectedMusicGenres, selectedSports, selectedStudyPlaces, selectedLearningStyles, handleNameChange, handleSelectionInterests, handleSelectionMusicGenres, handleSelectionSports, handleSelectionStudyPlaces, handleSelectionLearningStyles }) => {
	const inputRef = useRef(null);

	return (
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
	);
};

export default Form;
