import React from "react";

import { Button, ButtonText } from "./styles";

interface Props {
	colorType:'success' | 'secondary' ,
	text:string
}


export function ButtonLarge({text,colorType}:Props){
  return (
		<Button
			activeOpacity={.7}
			colorType={colorType}
		>
			<ButtonText>{text}</ButtonText>
		</Button>
	)
}