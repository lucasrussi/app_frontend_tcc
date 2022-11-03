import React, { useState,useEffect } from "react";
import { ButtonLarge } from "../components/ButtonLarge";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, ViewAcess} from "./styles";
import { ButtonMain } from "../components/ButtonMain";

export function MenuPrincipal({navigation}:any){

  interface propsData {
    id:string,
    title: string,
    desc: string
  }


  const [data, setData] = useState<propsData[]>();


  AsyncStorage.getItem('@storage_data').then(res =>{
    if(res){
      setData(JSON.parse(res))
    }
  })

  return(
    <Container>
			<ViewAcess>
        <ButtonMain text="Listar Áudio" colorType="secondary" toPage="ListarAudio" navigation={navigation} data={data}/>
        <ButtonLarge text="Adicionar Áudio" 	colorType="secondary" toPage="RegisterAudio" navigation={navigation}/>
				<ButtonLarge text="Sair" 	colorType="secondary" toPage="Home" navigation={navigation}/>
      </ViewAcess>

    </Container>
  )
}