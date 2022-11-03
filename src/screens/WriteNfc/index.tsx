import React, { useState,useEffect } from "react";
import { Image, Text, Button } from 'react-native'
import { Container } from "./styles";
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';


export function WriteNfc({route,navigation}:any){

	const {items} = route.params
	const [data, setData] = useState('');
	

	function writeNdef() {
		let result = false;
		NfcManager.start();

		NfcManager.requestTechnology(NfcTech.Ndef).then(()=>{
			const bytes = Ndef.encodeMessage([Ndef.textRecord(data)]);
			if(bytes){
				NfcManager.ndefHandler.writeNdefMessage(bytes).then(()=>{
					result = true;
				});
			}
		}).catch((e)=>{
			console.warn(e);
		}).finally(()=>{
			NfcManager.cancelTechnologyRequest();
		})
	}

	

  return(
    <Container>
      <Image source={require('../../../assets/image/nfcImage.png')} style={{ width: 400, height: 400 }}/>
      <Text style={{fontSize:20}}> Aproxime da TAG NFC para leitura </Text>
			<Button title="Escrever na TAG" onPress={()=>{writeNdef()}}/>
    </Container>
  )
}