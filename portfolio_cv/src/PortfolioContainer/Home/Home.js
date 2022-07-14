import React from "react";
import "./Home.css";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
	return (
		<div className="home-container" id="Home">
			<Header />
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;
