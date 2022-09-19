import React from "react";
import { Image } from 'react-native'
import { ButtonLarge } from "../components/ButtonLarge";
import { Container, ViewAcess, ViewLogo} from "./styles";

export function Home(){
  return(
    <Container>
      <ViewLogo>
				<Image source={require('../../../assets/image/logoTcc.png')} style={{ width: 305, height: 200 }}/>
      </ViewLogo>
      <ViewAcess>
        <ButtonLarge text="Escutar" colorType="secondary"/>
        <ButtonLarge text="Login" 	colorType="success"/>
      </ViewAcess>         
    </Container>
  )
}