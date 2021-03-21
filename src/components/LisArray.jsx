import React, { fregment } from "react";
const LisArray = () => {
	const tempertura = 21;

	return (
		<fregment>
			<p>Frio o Calor</p>
			<h4>{tempertura > 130 ? "Caliente" : "frio"}</h4>
		</fregment>
	);
};

export default LisArray;
