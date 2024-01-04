import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Testimonial from "./Components/Testimonial";
import Destination from "./Components/Destination";
import Footer from "./Components/Footer";
import Error from "./Components/Error404";
import "./Components/Navbar.css";
import "./Components/Contact.css";
import "./Components/slide.css";
import "./Components/SliderForm.css";
import "./Components/Testimonial.css";
import "./Components/WhyJapan.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />

				{/* <ToastContainer /> */}
				<Routes>
					<Route exact path="/" element={<Hero />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/blog" element={<Blog />}></Route>
					<Route path="/gallery" element={<Gallery />}></Route>
					<Route path="/testimonial" element={<Testimonial />}></Route>
					<Route path="/destination" element={<Destination />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
