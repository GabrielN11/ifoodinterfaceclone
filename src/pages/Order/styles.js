import styled from "styled-components/native";
import React from "react";

export const OrderView = styled.View`
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    align-items: center;
    background-color: #fefefe;
`

export const OrderTitle = styled.Text`
    font-size: 17px;
    text-align: center;
`
const Container = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;
`

const Image = styled.Image`
    width: 50%;
    height: 100%;
`

export const OrderImage = ({ source }) => (
    <Container>
      <Image source={source} />
    </Container>
)

