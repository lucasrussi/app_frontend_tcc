import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize"
export const Container = styled.View `
  flex:1;
  /* align-items: center; */
  background-color: ${({theme})=>theme.colors.backgrond};
`;