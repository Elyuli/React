import React from "react";
import "./Footer.css";
import Shape from "../../../assets/shape-bg.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-parent">
				<img src={Shape} alt="No internet connection" />
			</div>
		</div>
	);
};

export default Footer;
