import React from 'react'
import { Text } from 'react-native'
import { LoginButton } from '../Login/styles'
import { MenuView, TopView, UserImage, UserText, UserView } from './styles'
import userImg from '../../assets/img/UserImage.jpeg'
import MenuItem from './MenuItem'

const items = [
    {
        name: 'Notificações',
        description: 'Minha central de notificações',
        icon: 'bell'
    },
    {
        name: 'Clube iFood',
        description: 'Meus pacotes de desconto',
        icon: 'award'
    },
    {
        name: 'Cupons',
        description: 'Meus cupons de desconto',
        icon: 'tag'
    },
    {
        name: 'Endereços',
        description: 'Meus endereços de entrega',
        icon: 'map-pin'
    },
    {
        name: 'Doações',
        description: 'Minhas doações',
        icon: 'heart'
    },
    {
        name: 'Ajuda',
        icon: 'help-circle'
    },
    {
        name: 'Configurações',
        icon: 'settings'
    },
    {
        name: 'Usar no carro',
        icon: 'truck'
    },
    {
        name: 'Sugerir restaurantes',
        icon: 'shopping-cart'
    }
]

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
            <MenuView showsVerticalScrollIndicator={false}>
                {items.map(item => (
                    <MenuItem key={item.name} name={item.name} description={item.description} icon={item.icon}/>
                ))}
            </MenuView>
        </UserView>
    )
}

export default index
