import React, { useState, Fragment } from "react";

const Contador = () => {
	const [numero, setContador] = useState(0);
	const sumarNumero = () => {
		console.log("me funciona");
		setContador(numero + 1);
	};
	return (
		<Fragment>
			<p>Aumentar {numero}</p>
			<button onClick={sumarNumero} className="btn-info">
				sumar
			</button>
		</Fragment>
	);
};
export default Contador;
