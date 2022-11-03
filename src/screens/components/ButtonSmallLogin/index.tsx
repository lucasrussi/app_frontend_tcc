import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, ButtonText } from "./styles";
import { ApiGet } from "../../conn/apiGet";

interface Props{
	text:string,
	colorType:'success' | 'secondary',
  toPage:string,
  navigation:any,
	childAuthTrue:any,
  emailData:string,
	passData:string
}

export function ButtonSmallLogin({text,colorType,toPage,navigation,emailData,passData,childAuthTrue}:Props){

	const getData = async () =>{

		await ApiGet('selectAllAudioFile')?.then(async (resp)=>{
			const jsonValue = JSON.stringify(resp);
			await AsyncStorage.setItem('@storage_data',jsonValue);
		})
	}
	const authLogin = () =>{
    if(emailData == 'admin' && passData == "admin"){
      getData()
      navigation.navigate(`${toPage}`)
    }else{
      childAuthTrue(false)
    }
  }


  return(
    <Button
      activeOpacity={.7}
			colorType={colorType}
      onPress={()=>authLogin()}
    >
			<ButtonText>{text}</ButtonText>
    </Button>
    )
}