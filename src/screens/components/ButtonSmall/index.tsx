import React from "react"

import { Button, ButtonText } from "./styles";

interface Props{
	text:string,
	colorType:'success' | 'secondary',
  toPage:string,
  navigation:any,
  
}

export function ButtonSmall({text,colorType,toPage,navigation}:Props){
  return(
    <Button
      activeOpacity={.7}
			colorType={colorType}
      onPress={()=>navigation.navigate(`${toPage}`)}
    >
			<ButtonText>{text}</ButtonText>
    </Button>
    )
}