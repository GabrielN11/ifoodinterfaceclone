import styled from "styled-components/native";
import React from "react";

export const UserView = styled.View`
    background-color: #fefefe;
    flex: 1;
    flex-direction: column;
    padding: 10px;
    align-items: center;
`

export const TopView = styled.View`
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    background-color: #fefefe;
`

const Container = styled.View`
  width: 40%;
  height: 100%;
  align-items: center;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
`

export const UserImage = ({ source }) => (
    <Container>
      <Image source={source} />
    </Container>
)

export const UserText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    max-width: 60%;
`

export const MenuView = styled.ScrollView`
    border-top-width: 1px;
    border-style: solid;
    border-color: lightgrey;
    margin-top: 10px;
    width: 100%;
`

export const MenuItemView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: lightgrey;
    padding: 15px 5px;
    height: 75px;
`

export const NameText = styled.Text`
    font-size: 18px;
    color: #000;
`

export const DescriptionText = styled.Text`
    color: grey;
`

export const InfoView = styled.View`
    margin-right: auto;
    margin-left: 10px;
`