import styled from "styled-components";
import { View, Text } from "react-native";
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#282D31',
    white: '#fff'
};

const { primary, white} = Colors;

export const StyledContainer = styled.View`
    flex:1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color:${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${white};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;