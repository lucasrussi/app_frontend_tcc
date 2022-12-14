import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"

export const Container = styled.View `
  flex:1;
  align-items: center;
  background-color: ${({theme})=>theme.colors.backgrond};
`;

export const Header = styled.View`
    width: 100%;
    background-color: white;

    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    color: black;
    font-size: ${RFValue(40)}px;
`;

export const ViewAcess = styled.View`
  width: 100%;
  margin-top:${RFPercentage(4)}px;
  //align-items: center;
  height: ${RFPercentage(70)}px;
  //background-color: red;
`