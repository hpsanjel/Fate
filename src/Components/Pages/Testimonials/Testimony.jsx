import { React, useState } from "react";

const Testimony = () => {
	const [testimony, setTestimony] = useState({});

	const handleSubmitTestimony = async (e) => {
		e.preventDefault();
		setTestimony({ ...testimony, [e.target.name]: e.target.value });
		try {
			const response = await fetch("http://localhost:8083/addTestimonial", {
				method: "POST",
				body: JSON.stringify(testimony),
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();
			console.log(data);
			toast.success("Success", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 2000,
			});
		} catch (error) {
			console.error("Error:", error);
		}
		console.log(testimony);
	};
	return (
		<div className="">
			<form onSubmit={handleSubmitTestimony} action="POST">
				<input name="name" value={testimony.name} onChange={handleSubmitTestimony} type="text"></input>
				<input name="date" value={testimony.date} onChange={handleSubmitTestimony} type="text"></input>
				<input name="testimony" value={testimony.testimony} onChange={handleSubmitTestimony} type="date"></input>
				<button>Save Testimony</button>
			</form>
		</div>
	);
};

export default Testimony;
