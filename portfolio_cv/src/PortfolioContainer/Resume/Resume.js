import React, { useRef, useState } from "react";
import "./Resume.css";
import Education from "../../assets/Resume/education.svg";
import Interests from "../../assets/Resume/interests.svg";
import Programming from "../../assets/Resume/programming-skills.svg";
import Projects from "../../assets/Resume/projects.svg";
import Work from "../../assets/Resume/work-history.svg";

const Resume = () => {
	const [resume, setResume] = useState([
		{ title: "Education", src: `${Education}`, checked: true },
		{ title: "Work History", src: `${Work}`, checked: false },
		{ title: "Programming Skills", src: `${Programming}`, checked: false },
		{ title: "Projects", src: `${Projects}`, checked: false },
		{ title: "Interests", src: `${Interests}`, checked: false },
	]);
	const [position, setPosition] = useState(0);
	const carouselRef = useRef();
	const bulletsRef = useRef();
	const styles = { opacity: 5, transform: "translateY(1px)" };

	const onClickHandler = (pos) => {
		//console.log(pos);
		if (resume[pos].checked) return;

		const $bulletsArray = [
			{ title: "Education", src: `${Education}`, checked: false },
			{ title: "Work History", src: `${Work}`, checked: false },
			{ title: "Programming Skills", src: `${Programming}`, checked: false },
			{ title: "Projects", src: `${Projects}`, checked: false },
			{ title: "Interests", src: `${Interests}`, checked: false },
		];
		const calculo = 360 * pos;

		$bulletsArray[pos].checked = true;

		setResume($bulletsArray);
		return setPosition(calculo);
	};

	return (
		<div
			className="resume-container screen-container fade-in"
			style={styles}
			id="Resume"
		>
			<div className="resume-content">
				<div className="heading-container">
					<div className="screen-heading">
						<span>Resume</span>
					</div>
					<div className="screen-sub-heading">
						<span>My formal Bio Details</span>
					</div>
					<div className="heading-separator">
						<div className="separator-line"></div>
						<div className="separator-blob">
							<div></div>
						</div>
					</div>
				</div>
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets" ref={bulletsRef}>
								{resume.map(({ title, src, checked }, i) => {
									return (
										<div
											key={i}
											className={checked ? "bullet selected-bullet" : "bullet"}
											onClick={() => onClickHandler(i)}
										>
											<img src={src} className="bullet-logo" alt={title} />
											<span className="bullet-label" data-id={i}>
												{title}
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="resume-bullet-details">
						<div
							className="resume-details-carousel"
							style={{ transform: `translateY(-${position}px)` }}
						>
							<div className="resume-screen-container">
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>University of Ciego de Ávila, Cuba</span>
										<div className="heading-date">2020-PRESENT</div>
									</div>
									<div className="resume-sub-heading">
										<span>PURSUING A MASTER'S IN APPLIED INFORMATICS</span>
									</div>
									<div className="resume-heading-description">
										<span></span>
									</div>
								</div>
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>University of Ciego de Ávila, Cuba</span>
										<div className="heading-date">2016-2018</div>
									</div>
									<div className="resume-sub-heading">
										<span>MASTER IN TOURISM MANAGEMENT</span>
									</div>
									<div className="resume-heading-description">
										<span></span>
									</div>
								</div>
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>University of Ciego de Ávila, Cuba</span>
										<div className="heading-date">2010-2015</div>
									</div>
									<div className="resume-sub-heading">
										<span>INFORMATICS ENGINEERING</span>
									</div>
									<div className="resume-heading-description">
										<span></span>
									</div>
								</div>
							</div>
							<div className="resume-screen-container">
								<div className="experience-container">
									<div className="resume-heading">
										<div className="resume-main-heading">
											<div className="heading-bullet"></div>
											<span>University of Ciego de Ávila, Cuba</span>
											<div className="heading-date">2015-PRESENT</div>
										</div>
										<div className="resume-sub-heading">
											<span>TEACHER AND SOFTWARE DEVELOPER</span>
										</div>
									</div>
									<div className="experience-description">
										<span className="resume-description-text">
											Since 2015 I have been working at the University of Ciego
											de Ávila, Cuba as an acting professor. I teach classes and
											conferences in the area of ​​computer science. I have
											experience in the area of ​​web development.
										</span>
									</div>
									<div className="experience-description">
										{" "}
										<span className="resume-description-text">
											{""}- Design and implement an infrastructure for the
											visualization of spatial and georeferenced information for
											the Computer and Communications Company of the Ministry of
											Agriculture (EICMA) of my province..{""}
										</span>
										<br />
										<span className="resume-description-text">
											{""}- I stretch my mental capacity to develope UI as per
											the given designs.{""}
										</span>
										<br />
									</div>
								</div>
							</div>
							<div className="resume-screen-container programming-skills-container">
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>Javascript</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "85%" }}
										></div>
									</div>
								</div>
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>ReactJS</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "75%" }}
										></div>
									</div>
								</div>
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>NodeJS</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "65%" }}
										></div>
									</div>
								</div>
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>ExpressJS</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "65%" }}
										></div>
									</div>
								</div>
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>MongoDB</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "55%" }}
										></div>
									</div>
								</div>
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>CSS</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "75%" }}
										></div>
									</div>
								</div>
								<div className="skill-parent">
									<div className="heading-bullet"></div>
									<span>HTML</span>
									<div className="skill-percentage">
										<div
											className="active-percentage-bar"
											style={{ width: "75%" }}
										></div>
									</div>
								</div>
							</div>
							<div className="resume-screen-container">
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>Personal Portfolio Website</span>
										<div className="heading-date">2021-2022</div>
									</div>
									<div className="resume-sub-heading">
										<span>Technologies Used: React JS, Bootsrap</span>
									</div>
									<div className="resume-heading-description">
										<span>
											A Personal Portfolio website to showcase all my details
											and projects at one place.
										</span>
									</div>
								</div>
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>Agrogeomet </span>
										<div className="heading-date">2021-2022</div>
									</div>
									<div className="resume-sub-heading">
										<span>
											Technologies Used: React , PostgresSql, Express Js, Node,
											API REST Geoserver.
										</span>
									</div>
									<div className="resume-heading-description">
										<span>
											Web application to display georeferenced spatial
											information
										</span>
									</div>
								</div>
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>BurgerBuilder </span>
										<div className="heading-date">2021-2022</div>
									</div>
									<div className="resume-sub-heading">
										<span>Technologies Used: React Js, Redux, Bootstrap.</span>
									</div>
									<div className="resume-heading-description">
										<span>Online e-commerce website to sell burgers</span>
									</div>
								</div>
							</div>
							<div className="resume-screen-container">
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>Teaching</span>
									</div>
									<div className="resume-sub-heading">
										<span></span>
									</div>
									<div className="resume-heading-description">
										<span>
											Apart from being a tech enthusiast and a code writer, i
											also love to teach people what i know simply because i
											believe in sharing.
										</span>
									</div>
								</div>
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>Autodidact</span>
									</div>
									<div className="resume-sub-heading">
										<span></span>
									</div>
									<div className="resume-heading-description">
										<span>
											I love to learn new things, apply them and teach them
										</span>
									</div>
								</div>
								<div className="resume-heading">
									<div className="resume-main-heading">
										<div className="heading-bullet"></div>
										<span>Fitness</span>
									</div>
									<div className="resume-sub-heading">
										<span></span>
									</div>
									<div className="resume-heading-description">
										<span>
											I exercise every day and lead a healthy lifestyle.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
