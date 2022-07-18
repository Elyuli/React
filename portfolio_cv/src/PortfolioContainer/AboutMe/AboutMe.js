import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./AboutMe.css";

const AboutMe = () => {
	const styles = { opacity: 5, transform: "translateY(1px)" };
	return (
		<div className="about-me-container" style={styles} id="AboutMe">
			<div className="about-me-parent">
				<div className="heading-container">
					<div className="screen-heading">
						<span>About Me</span>
					</div>
					<div className="screen-sub-heading">
						<span>Why Choose Me?</span>
					</div>
					<div className="heading-separator">
						<div className="separator-line"></div>
						<div className="separator-blob">
							<div></div>
						</div>
					</div>
				</div>
				<div className="about-me-card">
					<div className="about-me-profile"></div>
					<div className="about-me-details">
						<span className="about-me-description">
							Full stack web developer with prior knowledge of MERN stacks with
							redux. I enjoy carrying out the layout and interactivity of web
							interfaces, as well as optimization, for the good positioning and
							loading performance of web sites and applications.
						</span>
						<div className="about-me-highlights">
							<div className="highlight-heading">
								<span>Here are a Few Highlights:</span>
							</div>
							<div className="highlight">
								<div className="highlight-blob"></div>
								<span>Full Stack web development</span>
							</div>
							<div className="highlight">
								<div className="highlight-blob"></div>
								<span>Interactive Front End as per the design</span>
							</div>
							<div className="highlight">
								<div className="highlight-blob"></div>
								<span>React </span>
							</div>
							<div className="highlight">
								<div className="highlight-blob"></div>
								<span>Redux for State Management</span>
							</div>
							<div className="highlight">
								<div className="highlight-blob"></div>
								<span>Building REST API</span>
							</div>
							<div className="highlight">
								<div className="highlight-blob"></div>
								<span>Managing database</span>
							</div>
						</div>
						<div className="about-me-options">
							{" "}
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
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
