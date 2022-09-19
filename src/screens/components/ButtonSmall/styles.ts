import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface ColorProps{
	colorType:'success' | 'secondary'
}


export const Button = styled.TouchableOpacity<ColorProps>`
    width: 20%;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${({ theme, colorType}) => colorType == "success" ? theme.colors.secondary:theme.colors.success};
    align-items: center;
    padding: ${RFPercentage(1)}px;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
	font-size: ${RFPercentage(3)}px;
`;