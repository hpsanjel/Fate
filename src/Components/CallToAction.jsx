import React from "react";

const CallToAction = () => {
	return (
		<div className="container relative overflow-hidden bg-white">
			<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
				<div className="relative mx-auto max-w-5xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-sm">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">Admissions are now open</h1>
						<p className="mt-8 text-xl text-gray-500">This year, Japanese universities have increased the quota for international students. With proper guidance, you could easily get admission in one of the best universities in Japan.</p>
					</div>
					<div>
						<div className="mt-8">
							{/* Decorative image grid */}
							<div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-6xl">
								<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
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
									</div>
								</div>
							</div>

							<a href="./destination" className="inline-block rounded-md border border-transparent bg-teal-900 px-8 py-3 text-center font-medium text-white hover:bg-teal-950">
								Apply Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
