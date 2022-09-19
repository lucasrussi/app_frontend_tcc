import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Input = styled.TextInput`
	background-color: #ffff;
	width: 80%;
  font-size: ${RFPercentage(2.5)}px;
  padding:${RFPercentage(1)}px;
  margin-top:${RFPercentage(1)}px;
  border-radius:${RFPercentage(2)}px   
`;

export const View = styled.View`
	width: 100%;
	align-items: center;
`;

export const Text = styled.Text`
	color: black;
	margin-top:${RFPercentage(2)}px;
	font-family: ${({theme}) => theme.fonts.medium};
	font-size: ${RFPercentage(3)}px;
`;