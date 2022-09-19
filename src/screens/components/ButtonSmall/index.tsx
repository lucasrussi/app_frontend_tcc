import React from "react"

import { Button, ButtonText } from "./styles";

interface Props{
	text:string,
	colorType:'success' | 'secondary',
}

export function ButtonSmall({text,colorType}:Props){
  return(
    <Button
      activeOpacity={.7}
			colorType={colorType}
    >
			<ButtonText>{text}</ButtonText>
    </Button>
    )
}