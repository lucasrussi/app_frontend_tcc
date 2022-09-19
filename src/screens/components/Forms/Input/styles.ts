import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"

export const Container = styled.TextInput`
    width: 100%;
    padding: 18px;

    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;


    background-color: ${({theme})=>theme.colors.primary};
    color:black;
    border-radius: 10px;

    margin-bottom: 8px;

`;


