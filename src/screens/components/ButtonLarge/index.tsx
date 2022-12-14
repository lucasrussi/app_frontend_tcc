import React from "react";

import { Button, ButtonText } from "./styles";
interface Props {
	colorType:'success' | 'secondary' ,
	text:string,
	toPage:string,
	navigation:any,
}


export function ButtonLarge({text,colorType,toPage,navigation}:Props){
  return (
		<Button
			activeOpacity={.7}
			colorType={colorType}
			onPress={()=> navigation.navigate(`${toPage}`)}
		>
			<ButtonText>{text}</ButtonText>
		</Button>
	)
}