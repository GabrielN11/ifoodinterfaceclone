import React from 'react'
import { View, Text } from 'react-native'
import { BoldText, LoginButton } from '../Login/styles'
import { TopView, UserImage, UserText, UserView } from './styles'
import userImg from '../../assets/img/UserImage.jpeg'

const index = ({navigation}) => {
    return (
        <UserView>
            <TopView>
                <UserText>Falta pouco para matar sua fome!</UserText>
                <UserImage source={userImg}/>
            </TopView>
            <LoginButton border={true} color='grey' backgroundcolor='#fefefe' onPress={() => navigation.navigate('Login')}>
                <Text>Entrar ou cadastrar-se</Text>
            </LoginButton>
        </UserView>
    )
}

export default index
