import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { InputCancel, SearchCategoryView, SearchInput, TextInputView } from './styles'
import { CategoryImage, CategoryItem, SubtitleText } from '../Home/styles'
import RestaurantItem from '../Home/RestaurantItem'


const index = () => {

    const [categories, setCategories] = React.useState([])
    const [restaurants, setRestaurants] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [loaded, setLoaded] = React.useState(false)
    const [focus, setFocus] = React.useState(false)
    const input = React.useRef()

    React.useEffect(() => {
        const fetchCategories = async () => {
            const categories = await (await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/categorias')).json()
            setCategories(categories)
            setLoaded(true)
        }
        fetchCategories()
    }, [])

    async function searchRestaurants(){
        const restaurants = await (await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/restaurantes')).json()
        const result = restaurants.filter(restaurant => restaurant.nome.includes(search))
        setRestaurants(result)
    }

    function updateSearch({ nativeEvent: { eventCount, target, text} }){
        setSearch(text)
        searchRestaurants()
    }

    function inputBlur(){
        setFocus(false)
        input.current.blur()
        setSearch('')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
            <TextInputView>
                <SearchInput placeholder='Loja' onFocus={() => setFocus(true)} onChange={updateSearch} value={search}
                active={focus} ref={input}/>
                {focus && <InputCancel onPress={inputBlur}>Cancelar</InputCancel>}
            </TextInputView>
            {search.length === 0 && <ScrollView>
                <SubtitleText style={{marginBottom: 20}}>Categorias</SubtitleText>
                <SearchCategoryView>
                    {loaded && categories.map(category => (
                        <CategoryItem key={category.id}>
                            <CategoryImage source={category.img_url} />
                            <Text>{category.nome}</Text>
                        </CategoryItem>
                    ))}
                </SearchCategoryView>
            </ScrollView>}
            {search.length > 0 && <View style={{margin: 15}}>
                {restaurants.map(restaurant => (
                    <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
                ))}
            </View>}
        </View>
    )
}

export default index