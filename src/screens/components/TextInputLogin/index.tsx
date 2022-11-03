import React, { useState } from "react";

import { Input,View,Text } from "./styles";

interface Props{
	placeHolder:string | null,
	text:string | null,
	childToParent:any,
	type:'email' |'pass' | null,
}

export function TextInputLogin({placeHolder, text, childToParent,type}:Props){
	const [textInput, setText] = useState('');
  return(
		<View>
			<Text>{text}</Text>
			<Input
				placeholder={placeHolder}
				placeholderTextColor="#000"
				onChangeText={(newText:any) => setText(newText)}
				onBlur={()=>childToParent(textInput,type)}
			/>
		</View>
  )
}