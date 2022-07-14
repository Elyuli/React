import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Favoritos = ({ favorites, addOrRemoveFromFavs }) => {
	const [token, setToken] = useState(sessionStorage.getItem("token"));
	return (
		<>
			{!token && <Navigate to="/" />}
			<h2>Sección de Favoritos</h2>
			<div className="row">
				{!favorites.length && (
					<div className="col-12 text-danger">No tenés nada en Favoritos</div>
				)}
				{favorites.map((movie) => {
					return (
						<div className="col-3" key={movie.id}>
							<div className="card my-4">
								<img
									src={movie.imgUrl}
									className="card-img-top"
									alt={movie.title}
								/>
								<button
									className={"favourite-btn"}
									onClick={() => addOrRemoveFromFavs(movie, movie.imgUrl)}
								>
									🖤
								</button>
								<div className="card-body">
									<h5 className="card-title">{movie.title}</h5>
									<p className="card-text">{movie.overview}...</p>
									<Link
										to={`/detalle?movieID=${movie.id}`}
										className="btn btn-primary"
									>
										Ver detalles
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Favoritos;
