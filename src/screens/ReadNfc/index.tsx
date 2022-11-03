import React, { useState,useEffect } from "react";
import { Image, Text } from 'react-native'
import { Container } from "./styles";
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';


export function ReadNfc({navigation}:any){


    let tagParan = []

		NfcManager.requestTechnology(NfcTech.Ndef).then(async ()=>{
			const tag = await NfcManager.getTag();
      let parsed = null;
    // if (tag.ndefMessage && tag.ndefMessage.length > 0) {
    //     // ndefMessage is actually an array of NdefRecords, 
    //     // and we can iterate through each NdefRecord, decode its payload 
    //     // according to its TNF & type
    //     const ndefRecords = tag.ndefMessage;
 
    //     function decodeNdefRecord(record) {
    //         if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
    //             return ['text', Ndef.text.decodePayload(record.payload)];
    //         } else if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_URI)) {
    //             return ['uri', Ndef.uri.decodePayload(record.payload)];
    //         }
 
    //         return ['unknown', '---']
    //     }
 
    //     parsed = ndefRecords.map(decodeNdefRecord);
    //     console.log(parsed)
    // }
      if(tag.ndefMessage && tag.ndefMessage.length > 0){
        const ndefRecords = tag.ndefMessage

        const decodeNdefRecord = (record:any) =>{
          if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
            return ['text', Ndef.text.decodePayload(record.payload)];
          } 
        }
        tagParan = ndefRecords.map(decodeNdefRecord);
        console.log(tagParan[0][1])
      }


      console.log('to aqui no readNFC e esse eh o data => '+ tagParan)
			navigation.navigate('PlayAudio',{items:`${tagParan[0][1]}`})
		}).catch((e)=>{
			console.warn("deu ruim", e)
		}).finally(()=>{NfcManager.cancelTechnologyRequest();})




  return(
    <Container>
      <Image source={require('../../../assets/image/nfcImage.png')} style={{ width: 400, height: 400 }}/>
      <Text style={{fontSize:20}}> Aproxime da TAG NFC para leitura </Text>
    </Container>
  )
}