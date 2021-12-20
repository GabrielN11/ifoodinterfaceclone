import React from 'react'
import { BottomView, RestaurantImage, RestaurantInfoText, RestaurantInfoView, RestaurantItemView, RestaurantTitle, RestaurantView } from './styles'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const RestaurantItem = ({restaurant}) => {
    const [liked, setLiked] = React.useState(false)
    return (
        <RestaurantItemView key={restaurant.id}>
            <RestaurantImage source={{ uri: restaurant.url_img }} />
            <RestaurantInfoView>
                <RestaurantTitle>{restaurant.nome}</RestaurantTitle>
                <View style={{ flexDirection: 'row' }}>
                    <Feather size={16} color='orange' name='star' />
                    <RestaurantInfoText color='orange'>{restaurant.nota}</RestaurantInfoText>
                    <RestaurantInfoText> • {restaurant.categoria} • </RestaurantInfoText>
                    <RestaurantInfoText>{restaurant.distancia}</RestaurantInfoText>
                </View>
                <BottomView>
                    <RestaurantInfoText>{restaurant.tempo_entrega} • </RestaurantInfoText>
                    <RestaurantInfoText color='green'>{restaurant.valor_frete}</RestaurantInfoText>
                </BottomView>
            </RestaurantInfoView>
            <Feather color={liked ? 'red' : 'grey'} size={20} name='heart' style={{ marginLeft: 'auto' }} onPress={() => setLiked(!liked)} />
        </RestaurantItemView>
    )
}

export default RestaurantItem
