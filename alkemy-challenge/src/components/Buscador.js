import React, { useState } from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
	const [token, setToken] = useState(sessionStorage.getItem("token"));
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const keyword = e.target.keyword.value.trim();
		//console.log(keyword);

		if (keyword.length === 0) {
			swAlert(<h5>Tienes que escribir una palabra clave!!!</h5>);
		} else if (keyword.length < 4) {
			swAlert(<h5>Tienes que escribir más de 4 carácteres!!!</h5>);
		} else {
			navigate(`/resultados?keyword=${keyword}`);
		}
	};

	return (
		<>
			{token && (
				<form onSubmit={submitHandler} className="d-flex align-items-center">
					<label className="form-label mb-0 mx-2">
						<input
							className="form-control"
							type="text"
							name="keyword"
							placeholder="Escribe una palabra clave..."
						/>
					</label>
					<button type="submit" className="btn btn-success ">
						Ingresar
					</button>
				</form>
			)}
		</>
	);
};

export default Buscador;
