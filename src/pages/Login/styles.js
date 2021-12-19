import styled from 'styled-components/native';
import React from 'react';

const Container = styled.View`
  width: 100%;
  height: 55%;
`

const LoginImage = styled.Image`
    width: 100%;
    height: 100%;
`

export const LoginBanner = ({ source }) => {
  return (
    <Container>
      <LoginImage source={source} />
    </Container>
  );
}

export const TextView = styled.View`
    width: 65%;
    align-items: center;
    flex-direction: column;
    margin: 10px 0px;
`

export const BoldText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #000;
    margin-bottom: 10px;
`

export const LightText = styled.Text`
    font-size: 18px;
    color: grey;
    text-align: center;
`

export const LoginView = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fefefe;
    flex-direction: column;
    align-items: center;
`

export const LoginButton = styled.TouchableOpacity`
    width: 85%;
    margin: 15px 0;
    padding: 12px;
    flex-direction: row;
    justify-content: center;
    border: ${({border, color}) => border ? `1px solid ${color}` : 'none'};
    border-radius: 5px;
    background-color: ${({backgroundcolor}) => backgroundcolor};
`