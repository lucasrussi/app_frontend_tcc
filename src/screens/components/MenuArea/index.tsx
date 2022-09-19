import React from "react";

import { Container } from "./styles";
import { ButtonSmall } from "../ButtonSmall";
export function MenuArea(){
	return(
		<Container>
			<ButtonSmall text="Lista" colorType="success"/>
			<ButtonSmall text="Novo" colorType="success"/>
			<ButtonSmall text="Sair" colorType="success"/>
		</Container>
	)
}