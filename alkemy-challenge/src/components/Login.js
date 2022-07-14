import { useEffect, useState } from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { Navigate } from "react-router-dom";

const Login = () => {
	const [token, setToken] = useState(sessionStorage.getItem("token"));

	const submitHandler = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const regexEmail =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		//	console.log(email, password);
		//console.log(regexEmail.test(email));

		if (email === "" || password === "") {
			//console.log("Los campos no pueden estar vacíos");
			swAlert(<h2>Los campos no pueden estar vacíos </h2>);
			return;
		}

		if (email !== "" && !regexEmail.test(email)) {
			//console.log("Debes escribir una dirección de correo electrónico  válida");
			swAlert(
				<h2>Debes escribir una dirección de correo electrónico válida </h2>
			);
			return;
		}

		if (email !== "challenge@alkemy.org" || password !== "react") {
			//console.log("Credenciales inválidas");
			swAlert(<h2>Credenciales inválidas</h2>);
			return;
		}
		//console.log("Ok, estamos listos para enviar la información");

		axios
			.post("http://challenge-react.alkemy.org", { email, password })
			.then((res) => {
				console.log(res.data);
				swAlert(<h2>Perfecto, ingresaste correctamente</h2>);
				const tokenRecibido = res.data.token;
				sessionStorage.setItem("token", tokenRecibido);
				setToken(tokenRecibido);
			})
			.catch((err) => {
				console.log(err);
				//setToken(false);
			});
	};

	//let token = sessionStorage.getItem("token");
	console.log("token", token);

	return (
		<>
			{token && <Navigate to="/listado" replace={true} />}

			<form onSubmit={submitHandler}>
				<label className="form-label d-block mt-2">
					<span>Correo Electrónico:</span>
					<br />
					<input className="form-control" type="text" name="email" />
				</label>
				<label className="form-label d-block mt-2">
					<span>Contraseña:</span>
					<br />
					<input className="form-control" type="password" name="password" />
				</label>
				<button type="submit" className="btn btn-success mt-2">
					Ingresar
				</button>
			</form>
		</>
	);
};

export default Login;
