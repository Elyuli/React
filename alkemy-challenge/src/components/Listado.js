import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import swAlert from "@sweetalert/with-react";

const Listado = ({ addOrRemoveFromFavs }) => {
	let token = sessionStorage.getItem("token");
	const [urlImg, setUrlImg] = useState("https://image.tmdb.org/t/p/w500");
	const [movieList, setMovieList] = useState([]);
	const [isFavourite, setIsFavourite] = useState(false);

	useEffect(() => {
		const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=2ab1853a09c795c5a538dc34d032ee6a&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

		axios
			.get(endpoint)
			.then((res) => {
				const apiData = res.data;
				console.log(apiData);
				setMovieList(apiData.results);
			})
			.catch((err) => {
				console.log(err);
				swAlert(<h2>{err.message}</h2>);
			});
	}, [setMovieList]);
	//console.log(movieList);

	return (
		<>
			{!token && <Navigate to="/" />}
			<div className="row">
				{movieList.map((movie) => {
					return (
						<div className="col-3" key={movie.id}>
							<div className="card my-4">
								<img
									src={`${urlImg}${movie.poster_path}`}
									className="card-img-top"
									alt={movie.title}
								/>
								<button
									className={isFavourite ? "favourite-btn" : "favourite-btn"}
									onClick={() => {
										addOrRemoveFromFavs(movie, urlImg);
										setIsFavourite(!isFavourite);
									}}
								>
									🖤
								</button>
								<div className="card-body">
									<h5 className="card-title">{movie.title}</h5>
									<p className="card-text">
										{movie.overview.substring(0, 100)}...
									</p>
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

export default Listado;
