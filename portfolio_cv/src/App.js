import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Header from "./PortfolioContainer/Home/Header/Header";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";
import ScrollContainer from "./PortfolioContainer/Scroll/ScrollContainer";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";

function App() {
	return (
		<div className="App">
			{/* <Home />
			<AboutMe />
			<Resume />
			<Testimonial />
			<ContactMe />
			<ScrollContainer /> */}

			<Routes>
				<Route path="/" element={<Home />} />

				{/* <Route path="/section" element={<Header />} />
				<Route path="/section" element={<AboutMe />} />
				<Route path="/section" element={<Resume />} />
				<Route path="/section" element={<Testimonial />} />
				<Route path="/section" element={<ContactMe />} /> */}
			</Routes>
			<AboutMe />
			<Resume />
			<Testimonial />
			<ContactMe />
			<ScrollContainer />
		</div>
	);
}

export default App;
