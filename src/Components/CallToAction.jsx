import React from "react";
import StyledButton from "./Button";

const CallToAction = () => {
	return (
		<div className=" bg-slate-50">
			<div className="container">
				<div className="flex flex-col md:flex-row py-12 justify-between md:p-20 md:mb-0">
					<div className="w-full mb-12 md:w-1/2 py-12">
						<h1 className="text-6xl mt-6 font-bold tracking-tight text-gray-900">Admissions are now open</h1>
						<p className="my-8 text-xl text-gray-500">This year, Japanese universities have increased the quota for international students. With proper guidance, you could easily get admission in one of the best universities in Japan.</p>
						<StyledButton type="submit" className="hover:bg-teal-900">
							Apply Now
						</StyledButton>
						<div className="stats flex gap-12 bg-lime-50 h-[100px] my-10 p-4 justify-around text-center">
							<div className="students flex flex-col h-full  w-1/3 bg-slate-100 p-2 ">
								<p className="text-3xl font-bold">200K</p>
								<p>Students</p>
							</div>
							<div className="students flex flex-col h-full w-1/3 bg-slate-100 p-2 ">
								<p className="text-3xl font-bold">50K</p>
								<p>Employees</p>
							</div>
							<div className="students flex flex-col h-full w-1/3 bg-slate-100 p-2 ">
								<p className="text-3xl font-bold">204</p>
								<p>Awards</p>
							</div>
						</div>
					</div>
					{/* Decorative image grid */}
					{/* <div className="flex items-center space-x-6 lg:space-x-8">
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-4">
							<div className="h-24 md:h-56 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
								<img src="/images/slide1 Large.jpg" alt="" className="h-full w-full object-cover object-center" />
							</div>
							<div className="h-56 w-44 overflow-hidden rounded-lg">
								<img src="images/slide3 Large.jpeg" alt="" className="h-full w-full object-cover object-center" />
							</div>
						</div>
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-4">
							<div className="h-50 w-44 overflow-hidden rounded-lg">
								<img src="/images/slide3 Large.jpeg" alt="" className="h-full w-full object-cover object-center" />
							</div>
							<div className="h-60 w-44 overflow-hidden rounded-lg">
								<img src="/images/slide4 Large.jpeg" alt="" className="h-full w-full object-cover object-center" />
							</div>
							<div className="h-50 w-44 overflow-hidden rounded-lg">
								<img src="/images/slide3 Large.jpeg" alt="" className="h-full w-full object-cover object-center" />
							</div>
						</div>
					</div> */}
					<div className="img">
						<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="h-90% w-full object-cover object-center p-12 ml-16 mt-14" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
