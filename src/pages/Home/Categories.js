import React from 'react'
import { Text } from 'react-native'
import { CategoryItem, CategoriesView, CategoryImage } from './styles'

const Categories = ({categories}) => {
    return (
        <CategoriesView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map(category => (
                <CategoryItem key={category.id}>
                    <CategoryImage source={category.img_url}/>
                    <Text>{category.nome}</Text>
                </CategoryItem>
            ))}
        </CategoriesView>
    )
}

export default Categories
