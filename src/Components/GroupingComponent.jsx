import React, { useState, useEffect } from "react";

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

const groupStudents = (students) => {
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

			if (group.length === 4) {
				groups.push(group);
			} else if (group.length > 4) {
				// Split larger groups into smaller groups of three
				for (let i = 0; i < group.length; i += 4) {
					groups.push(group.slice(i, i + 4));
				}
			}
		}
	});

	return groups;
};

const GroupingComponent = () => {
	const [groupedStudents, setGroupedStudents] = useState([]);
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (storedData) {
			setUserData(storedData);
		}
	}, []);

	const handleCreateGroup = () => {
		const groups = groupStudents(userData);
		setGroupedStudents(groups);
	};

	return (
		<div className="container mx-auto p-8">
			<h1 className="text-3xl font-bold mb-4">Group Creation</h1>
			<button onClick={handleCreateGroup} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mb-4">
				Create Group of 3
			</button>
			{/* <select onChange={handleCreateGroup}>
				<option value="3">Three</option>
				<option value="4">Four</option>
				<option value="5">Five</option>
			</select> */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{groupedStudents.map((group, index) => (
					<div key={index} className="border border-gray-300 p-4 rounded-md">
						<h2 className="text-xl font-semibold mb-2">Group {index + 1}</h2>
						{group.map((student, studentIndex) => (
							<div key={studentIndex} className="bg-gray-100 p-2 rounded-md mb-2">
								<p className="text-lg font-semibold">{student.name}</p>
								<p className="text-sm">{/* Other student details */}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default GroupingComponent;
