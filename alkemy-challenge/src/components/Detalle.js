import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Detalle = () => {
	const [movie, setMovie] = useState({});
	let token = sessionStorage.getItem("token");
	let query = new URLSearchParams(window.location.search);
	let movieID = query.get("movieID");

	console.log("movieID", movieID);

	useEffect(() => {
		let endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=2ab1853a09c795c5a538dc34d032ee6a&language=es-ES`;
		axios
			.get(endpoint)
			.then((res) => {
				console.log("res-detalle", res.data);
				const movieData = res.data;
				setMovie(movieData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [movieID]);

	return (
		<>
			{!token && <Navigate to="/" />}
			{!movie && <p>Cargando...</p>}
			{movie && (
				<>
					<h2>{movie.original_title}</h2>
					<div className="row">
						<div className="col-4">
							<img
								src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
								alt={`${movie.original_title}`}
							/>
						</div>
						<div className="col-8">
							<h5>Fecha de estreno: {movie.release_date}</h5>
							<h5>Reseña: {movie.overview}</h5>
							<h5>Géneros: </h5>
							{movie.genres && (
								<ul>
									{movie.genres.map((grs) => {
										return <li key={grs.id}>{grs.name}</li>;
									})}
								</ul>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Detalle;
