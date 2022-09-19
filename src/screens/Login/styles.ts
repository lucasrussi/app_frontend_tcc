import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize"
export const Container = styled.View `
  flex:1;
  align-items: center;
  background-color: ${({theme})=>theme.colors.backgrond};
`;
export const ViewLogo = styled.View`
  width: 100%;
  align-items: center;
  height: ${RFPercentage(40)}px;
  padding-top:${RFPercentage(10)}px;
  //background-color: ${({theme})=>theme.colors.primary};
  justify-content: center;
`;

export const ViewAcess = styled.View`
  width: 100%;
  margin-top:${RFPercentage(4)}px;
  //align-items: center;
  height: ${RFPercentage(70)}px;
  //background-color: red;
`

export const ButtonArea = styled.View`
	width: 100%;
  margin-top:${RFPercentage(3)}px;
	flex-direction: row;
	justify-content: space-around;
	
`