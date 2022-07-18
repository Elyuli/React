import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import ImgEmail from "../../assets/images/mailz.jpeg";
import Loader from "../../assets/loader.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "bootstrap-icons/icons/facebook.svg";
import "./ContactMe.css";

/* Instalar axios, material-ui: Fallback */

const ContactMe = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [open, setOpen] = useState(false);

	const styles = {
		opacity: 5,
		transform: "translateY(1px)",
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setIsLoading(true);

		fetch("https://formsubmit.co/ajax/elyuli.dev@gmail.com", {
			method: "POST",
			body: new FormData(e.target),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((res) => {
				console.log(res);
				setError(null);
				setOpen(false);
				e.target.reset();
			})
			.catch((error) => {
				console.log(error);
				setOpen(true);
				let message =
					error.statusText || "Ocurrió un error al enviar, intenta nuevamente";
				setError(message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="main-container fade-in" id="ContactMe" style={styles}>
			<div className="heading-container">
				<div className="screen-heading">
					<span>Contact Me</span>
				</div>
				<div className="screen-sub-heading">
					<span>Lets Keep In Touch</span>
				</div>
				<div className="heading-separator">
					<div className="separator-line"></div>
					<div className="separator-blob">
						<div></div>
					</div>
				</div>
			</div>
			<div className="central-form">
				<div className="col">
					<h2 className="title">
						<div className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</div>
					</h2>
					<a
						href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
						rel="noopener norrefer"
					>
						<i className="fa fa-facebook-square"> </i>
					</a>
					<a
						href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
						rel="noopener norrefer"
					>
						{/* <img src={Facebook} alt="Facebook" /> */}
						<i className="fa fa-google-plus-square"> </i>
					</a>
					<a
						href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
						rel="noopener norrefer"
					>
						<i className="fa fa-instagram"> </i>
					</a>
					<a
						href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
						rel="noopener norrefer"
					>
						<i className="fa fa-youtube-square"> </i>
					</a>
					<a
						href="https://www.facebook.com/juliocesar.fernandezcompanioni/"
						rel="noopener norrefer"
					>
						<i className="fa fa-twitter-square"> </i>
					</a>
				</div>
				<div className="back-form">
					<div className="img-back">
						<h4>Send Your Email Here!</h4>
						<img src={ImgEmail} alt="Pic not found" />
					</div>
					<form onSubmit={submitHandler}>
						<p></p>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Enter your name *"
							title="Nombre sólo acepta letras y espacios en blanco"
							pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
							required
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email *"
							title="Email incorrecto"
							pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
							required
						/>
						<label htmlFor="message">Message</label>
						<textarea
							type="text"
							name="comments"
							cols="50"
							rows="5"
							placeholder="Leave me a message *"
							required
						></textarea>
						<div className="send-btn">
							<button type="submit">
								send<i className="fa fa-paper-plane"></i>
							</button>
							{isLoading && <img src={Loader} alt="Enviando..." />}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
