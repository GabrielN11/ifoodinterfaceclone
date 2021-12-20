import React from 'react'
import { DescriptionText, InfoView, MenuItemView, NameText } from './styles'
import { Feather } from '@expo/vector-icons'
import { LightText } from '../Login/styles'
import { View } from 'react-native'

const MenuItem = ({name, description, icon}) => {
    return (
        <MenuItemView>
            <Feather name={icon} size={25} color='grey'/>
            <InfoView>
                <NameText>{name}</NameText>
                {description && <DescriptionText>{description}</DescriptionText>}
            </InfoView>
            <Feather name='chevron-right' size={25} color='grey'/>
        </MenuItemView>
    )
}

export default MenuItem
