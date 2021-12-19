import React from 'react'
import { View } from 'react-native'
import { BoldText, LightText, TextView } from '../Login/styles'
import { OrderImage, OrderTitle, OrderView } from './styles'
import orderImg from '../../assets/img/OrderImage.jpeg'

const index = () => {
    return (
        <OrderView>
            <OrderTitle>MEUS PEDIDOS</OrderTitle>
            <OrderImage source={orderImg}/>
            <TextView>
                <BoldText>Bora pedir um iFood?</BoldText>
                <LightText>Experimente os melhores restaurantes e mercados perto de você</LightText>
            </TextView>
        </OrderView>
    )
}

export default index
