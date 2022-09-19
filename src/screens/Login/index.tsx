import React from "react";

import { Image } from 'react-native'
import { ButtonSmall } from "../components/ButtonSmall";
import { TextInputLogin } from "../components/TextInputLogin";
import { Container, ViewAcess, ViewLogo,ButtonArea } from "./styles";

export function Login(){

  return(
    <Container>
      <ViewLogo>
				<Image source={require('../../../assets/image/LoginImg.png')} style={{ width: 400, height: 400 }}/>
      </ViewLogo>
      <ViewAcess>
        <TextInputLogin text={"Entre com seu e-mail"} placeHolder={"E-mail"}/>
        <TextInputLogin text={"Digite sua senha"} placeHolder={"Senha"}/>
        <ButtonArea>
          <ButtonSmall text="Voltar" colorType="success"/>
          <ButtonSmall text="Entrar" colorType="success"/>
        </ButtonArea>
      </ViewAcess>
    </Container>
    )
}