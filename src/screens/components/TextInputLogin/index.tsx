import React from "react";

import { Input,View,Text } from "./styles";

interface Props{
	placeHolder:string | null,
	text:string | null,
}

export function TextInputLogin({placeHolder, text}:Props){
  return(
		<View>
			<Text>{text}</Text>
			<Input
				placeholder={placeHolder}
				placeholderTextColor="#000"
			/>
		</View>
  )
}