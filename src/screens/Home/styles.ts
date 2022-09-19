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
    background-color: ${({theme})=>theme.colors.primary};
    justify-content: center;
`;

export const ViewAcess = styled.View`
    width: 100%;
    align-items: center;
    height: ${RFPercentage(60)}px;
    justify-content: center;
`