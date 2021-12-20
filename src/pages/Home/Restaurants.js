import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RestaurantView } from './styles'
import RestaurantItem from './RestaurantItem'

const Restaurants = ({ restaurants }) => {
    return (
        <RestaurantView>
            {restaurants.map(restaurant => (
                <RestaurantItem restaurant={restaurant} key={restaurant.id}/>
            ))}
        </RestaurantView>
    )
}

export default Restaurants
