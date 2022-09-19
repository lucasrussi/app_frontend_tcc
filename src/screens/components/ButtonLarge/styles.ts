import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface ColorProps{
	colorType:'success' | 'secondary'
}


export const Button = styled.TouchableOpacity<ColorProps>`
  width: 50%;
	background-color: ${({ theme, colorType}) => colorType == "success" ? theme.colors.secondary:theme.colors.success};
  border-radius: 7;
  align-items: center;
  padding: 10px;
	margin-top: ${RFPercentage(1)}px;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
	font-size: ${RFPercentage(3)}px;
`;