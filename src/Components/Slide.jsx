import React, { useState } from "react"
import SlideData from "./SlideData"

const Slide = ({ Slides }) => {
	const [current, setCurrent] = useState(0)
	//const [suggestions, setSuggestions] = useState("");
	const length = Slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(Slides) || Slides.length <= 0) {
		return null
	}

	// function showSuggestions(e) {
	// 	setSuggestions(e.target.value);
	// }

	return (
		<div id="slider-whole">
			<div className="md:block slidercontainer">
				<section className="slider">
					<div className="control-btn">
						<button className="prev">
							<i className="bi bi-arrow-left" onClick={prevSlide}></i>
						</button>
						<button className="next">
							<i className="bi bi-arrow-right" onClick={nextSlide}></i>
						</button>
					</div>

					{SlideData.map((slide, index) => {
						return (
							<div className={index === current ? "slide active" : "slide"} key={index}>
								{index === current && <img src={slide.images} alt={slide.alttext} />}
							</div>
						)
					})}
				</section>
			</div>
		</div>
	)
}

export default Slide
