import React from "react";
import StyledButton from "./Button";
import { OutlinedButton } from "./Button";
import Stats from "./Stats";

const CallToAction = () => {
	return (
		<div className="container">
			<div className="flex flex-col md:flex-row py-2 justify-between md:p-2 md:mb-0">
				<div className="w-full mb-12 md:w-1/2 py-12">
					<h1 className="text-6xl mt-6 font-bold tracking-tight text-gray-900">Admissions are now open</h1>
					<p className="my-8 text-xl text-gray-500">This year, Japanese universities have increased the quota for international students. With proper guidance, you could easily get admission in one of the best universities in Japan.</p>
					<StyledButton type="submit" className="mr-2">
						Apply Now
					</StyledButton>
					<OutlinedButton type="submit" className="">
						Explore More
					</OutlinedButton>
				</div>

				<div className="img shrink-0">
					<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" alt="admission open" className="w-full object-cover object-center md:p-12 md:ml-16 md:mt-14" />
				</div>
			</div>
			<Stats />
		</div>
	);
};

export default CallToAction;
