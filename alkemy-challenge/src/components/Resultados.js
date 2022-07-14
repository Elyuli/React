import axios from "axios";
import React, { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";
import { Link, Navigate, useLocation } from "react-router-dom";

const Resultados = () => {
	const [token, setToken] = useState(sessionStorage.getItem("token"));
	const location = useLocation();
	let query = new URLSearchParams(window.location.search);
	let keyword = query.get("keyword");
	const [moviesResults, setMoviesResults] = useState([]);

	useEffect(() => {
		if (!keyword) return;

		const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=2ab1853a09c795c5a538dc34d032ee6a&language=es-ES&page=1&include_adult=false&query=${keyword}`;

		axios
			.get(endpoint)
			.then((res) => {
				console.log("res-resultados", res.data);
				const moviesArray = res.data.results;
				if (moviesArray.length === 0) {
					swAlert(<h4>Tu búsqueda no arrojó resultados!</h4>);
				}
				setMoviesResults(moviesArray);
			})
			.catch((err) => {
				swAlert(<h2>{err.message}</h2>);
			});
	}, [location.pathname, keyword]);

	return (
		<>
			{!token && <Navigate to="/" />}
			<h2>
				Buscaste: <em>{keyword}</em>
			</h2>
			{moviesResults.length === 0 && <h3>No hay Resultados</h3>}
			<div className="row">
				{moviesResults.map((movie) => {
					return (
						<div className="col-4" key={movie.id}>
							<div className="card my-4">
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									className="card-img-top"
									alt={movie.title}
								/>
								<div className="card-body">
									<h5 className="card-title">{movie.title}</h5>

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

export default Resultados;
