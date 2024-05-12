import React from "react";
import StyledButton from "./PrimaryButton";

const CallToAction2 = () => {
	return (
		<section>
			<div className="mx-auto py-8 ">
				<div className="bg-fatePrimary p-8 md:p-12 lg:px-16 lg:py-24">
					<div className="mx-auto max-w-xl text-center">
						<h2 className="text-2xl font-bold text-white md:text-3xl">Unleash your potential in Japan</h2>

						<p className="hidden text-white/90 sm:mt-4 sm:block">Experience world-className education, cutting-edge technology, and a rich culture. Live in a safe, beautiful country with exciting job opportunities. Embark on your Japanese adventure today</p>

						<div className="mt-4 md:mt-8">
							<StyledButton type="submit" onClick={() => navigate(`/Destination`)}>
								Explore Universities
							</StyledButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction2;
