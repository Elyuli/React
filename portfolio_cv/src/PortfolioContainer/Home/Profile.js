import React from "react";
import Typical from "react-typical";
import { NavHashLink } from "react-router-hash-link";
import "./Profile.css";

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							{" "}
							{/* <a
								href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
								rel="noopener norrefer"
							>
								<i className="fa fa-facebook-square"> </i>
							</a> */}
							{/* <a
								href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
								rel="noopener norrefer"
							>
								<i className="fa fa-google-plus-square"> </i>
							</a> */}
							{/* <a
								href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
								rel="noopener norrefer"
							>
								<i className="fa fa-instagram"> </i>
							</a> */}
							{/* <a
								href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
								rel="noopener norrefer"
							>
								<i className="fa fa-youtube-square"> </i>
							</a> */}
							{/* <a
								href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
								rel="noopener norrefer"
							>
								<i className="fa fa-twitter-square"> </i>
							</a> */}
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{""} Hello I'M <span className="highlighted-text">Elyuli</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{""}{" "}
							<h1>
								<Typical
									loop={Infinity}
									steps={[
										"Enthusiastic Dev 🤓",
										1000,
										"Full Stack Developer 💻",
										1000,
										"MERN Stack Dev 😎",
										1000,
										"Cross Plattform Dev 🌐",
										1000,
										"React/React Native Dev 🖥️",
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building applications with front and back end
								operations.
							</span>
						</span>
					</div>
					<div className="profile-options">
						<NavHashLink to="#ContactMe">
							<button className="butn primary-btn">
								{""} Hire Me{""}
							</button>
						</NavHashLink>
						<a
							href="Julio Cesar-curriculum-vitae.pdf"
							download="Julio Cesar-curriculum-vitae.pdf"
						>
							<button className="butn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
