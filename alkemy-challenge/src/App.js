import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
//Styles
import "./css/app.css";
import "./css/bootstrap.min.css";
import Resultados from "./components/Resultados";
import swAlert from "@sweetalert/with-react";
import Favoritos from "./components/Favoritos";
function App() {
	const [tempMovieInFavs, setTempMovieInFavs] = useState([]);
	const [favMovies, setFavMovies] = useState(localStorage.getItem("favs"));
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		if (favMovies === null) return;
		setTempMovieInFavs(JSON.parse(favMovies));
	}, [favMovies]);

	useEffect(() => {
		console.log("tempMovieInFavs", tempMovieInFavs);
	}, [tempMovieInFavs]);

	const addOrRemoveFromFavs = (movie, urlImg) => {
		const imgUrl = `${urlImg}${movie.poster_path}`;
		const title = movie.title;
		const overview = movie.overview.substring(0, 100);

		const movieData = {
			id: movie.id,
			imgUrl,
			title,
			overview,
		};

		const newTemp = [...tempMovieInFavs];
		let movieIsInArray = tempMovieInFavs.find((film) => film.id === movie.id);

		if (!movieIsInArray) {
			newTemp.push(movieData);
			setTempMovieInFavs(newTemp);
			localStorage.setItem("favs", JSON.stringify(newTemp));
			setFavorites(newTemp);
			console.log("Se agregó la pelicula a favoritos");
		} else {
			console.log("Se elimino la pelicula de favoritos");
			let moviesLeft = tempMovieInFavs.filter((film) => film.id !== movie.id);
			setFavorites(moviesLeft);
			setTempMovieInFavs(moviesLeft);
			localStorage.setItem("favs", JSON.stringify(moviesLeft));
		}
	};

	useEffect(() => {
		const favsInLocal = localStorage.getItem("favs");

		if (favsInLocal) {
			const favsArray = JSON.parse(favsInLocal);
			//console.log("favsArray", favsArray);
			setFavorites(favsArray);
		}
	}, []);

	return (
		<>
			<Header favorites={favorites} />
			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/listado"
						element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
					/>
					<Route path="/detalle" element={<Detalle />} />
					<Route path="/resultados" element={<Resultados />} />
					<Route
						path="/favoritos"
						element={
							<Favoritos
								favorites={favorites}
								addOrRemoveFromFavs={addOrRemoveFromFavs}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
