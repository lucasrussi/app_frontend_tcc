import React, { useState }from "react";

import { Image,Text } from 'react-native'
import { ButtonSmall } from "../components/ButtonSmall";
import { ButtonSmallLogin } from "../components/ButtonSmallLogin";
import { TextInputLogin } from "../components/TextInputLogin";
import { Container, ViewAcess, ViewLogo,ButtonArea } from "./styles";

export function Login({navigation}:any) {
  


  const [emailData, setEmailData] = useState('');
  const [passData, setPassData] = useState('');
  const childToParent = (childdata:any,type:string) => {
    type == 'email' ? setEmailData(childdata) : setPassData(childdata)
  }
  const [showElement, setShowElement] = useState(false)

  
  const childAuthTrue = (childData:boolean)=>{
    if(!childData){
      setShowElement(true)
    }else{
      setShowElement(false)
    }
    
  }
  

  return(
    <Container>
      {/* <ViewLogo>
				<Image source={require('../../../assets/image/LoginImg.png')} style={{ width: 400, height: 400 }}/>
      </ViewLogo> */}
      {showElement ? <Text style={{color:"red", marginTop:30, fontSize:20}}>Credenciais incorretas</Text> : null}
      
      
      <Text></Text>
      <ViewAcess>
        <TextInputLogin text={"Entre com seu e-mail"} placeHolder={"E-mail"} childToParent={childToParent} type={"email"}/>
        <TextInputLogin text={"Digite sua senha"} placeHolder={"Senha"} childToParent={childToParent} type={"pass"}/>
        <ButtonArea>
          <ButtonSmall text="Voltar" colorType="success" toPage="Home" navigation={navigation}/>
          <ButtonSmallLogin text="Entrar" colorType="success" toPage="MenuPrincipal" navigation={navigation} emailData={emailData} passData={passData} childAuthTrue={childAuthTrue}
          />
        </ButtonArea>
      </ViewAcess>
    </Container>
    )
}