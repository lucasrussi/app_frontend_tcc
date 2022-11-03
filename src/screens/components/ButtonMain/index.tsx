import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, ButtonText } from "./styles";
interface Props {
	colorType:'success' | 'secondary' ,
	text:string,
	toPage:string,
	navigation:any,
  data:any
}


export function ButtonMain({text,colorType,toPage,navigation,data}:Props){



  return (
		<Button
			activeOpacity={.7}
			colorType={colorType}
			onPress={()=> navigation.navigate(`${toPage}`,{items:data})}
		>
			<ButtonText>{text}</ButtonText>
		</Button>
	)
}