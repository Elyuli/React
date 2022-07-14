import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Header.css";

const initNavLink = [
	{ name: "Home", checked: true },
	{ name: "AboutMe", checked: false },
	{ name: "Resume", checked: false },
	{ name: "Testimonial", checked: false },
	{ name: "ContactMe", checked: false },
];

const Header = () => {
	const [isHamburger, setIsHamburger] = useState(false);
	const [navLink, setNavLink] = useState(initNavLink);
	const [openMobile, setOpenMobile] = useState(false);
	//const [stylesHamburger, setStylesHamburger] = useState(["header-options"]);

	let stylesHamburger = ["header-options"];

	const hamburgerOnClickHandler = () => {
		setIsHamburger(true);
	};

	if (isHamburger) {
		stylesHamburger.push("show-hamburger-options");
	}

	const navLinkOnChangeHandler = (pos) => {
		if (isHamburger) setIsHamburger(false);

		if (navLink[pos].checked) return;

		const newNavLink = [
			{ name: "Home", checked: false },
			{ name: "AboutMe", checked: false },
			{ name: "Resume", checked: false },
			{ name: "Testimonial", checked: false },
			{ name: "ContactMe", checked: false },
		];

		const checked = !navLink[pos].checked;
		newNavLink[pos].checked = checked;

		return setNavLink(newNavLink);
	};

	return (
		<div className="header-container">
			<div className="header-parent">
				<div className="header-hamburger" onClick={hamburgerOnClickHandler}>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="bars"
						className="svg-inline--fa fa-bars fa-w-14 header-hamburger-bars"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
						></path>
					</svg>
				</div>
				<div className="header-logo">
					<span>@Elyuli</span>
				</div>
				<div className={stylesHamburger.join(" ")}>
					{navLink.map((link, i) => {
						return (
							<NavHashLink
								key={i}
								to={`#${link.name}`}
								className={
									link.checked
										? "header-option header-option-separator selected-header-option"
										: "header-option header-option-separator"
								}
								onClick={() => navLinkOnChangeHandler(i)}
							>
								{link.name}
							</NavHashLink>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;
