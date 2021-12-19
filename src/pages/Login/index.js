import React from 'react'
import { Text } from 'react-native'
import { LoginBanner, LoginView, TextView, BoldText, LightText, LoginButton } from './styles'
import FoodImage from '../../assets/img/LoginImage.jpeg'

const index = ({navigation}) => {
    return (
        <LoginView>
            <LoginBanner source={FoodImage} />
            <TextView>
                <BoldText>Falta pouco para matar sua fome!</BoldText>
                <LightText>Como deseja continuar?</LightText>
            </TextView>
            <LoginButton backgroundcolor='#0069ff'>
                <Text style={{color: '#fff'}}>Entrar com Google</Text>
            </LoginButton>
            <LoginButton border={true} color='grey' backgroundcolor='#fefefe'>
                <Text style={{color: 'grey'}}>Outras opções</Text>
            </LoginButton>
            <LightText onPress={() => navigation.navigate('TabRoutes')}>Entrar como convidado</LightText>
        </LoginView>
    )
}

export default index
