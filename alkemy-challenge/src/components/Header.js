import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

const Header = ({ favorites }) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		console.log("Problem");
		setToken(sessionStorage.getItem("token"));
	}, []);

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link to="/" className="navbar-brand">
						AlkeFlix
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle Navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/listado" className="nav-link">
									Listado
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/favoritos" className="nav-link">
									Favoritos
								</Link>
							</li>
							{token && (
								<li className="nav-item d-flex align-items-center">
									<span className="text-success ">
										{favorites.length > 0 && (
											<>Películas en Favoritos:{favorites.length}</>
										)}
									</span>
								</li>
							)}
						</ul>
					</div>
					<Buscador />
				</div>
			</nav>
		</header>
	);
};

export default Header;
