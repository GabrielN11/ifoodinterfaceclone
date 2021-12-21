import React from 'react'
import { View, Text } from 'react-native'
import qrCodeImg from '../../assets/img/Qrcode.jpeg'
import Loading from '../Loading'
import Banners from './Banners'
import Categories from './Categories'
import Restaurants from './Restaurants'
import { CategoriesView, HomeView, QrCodeImage, SubtitleText, TitleText, TitleView } from './styles'

const index = () => {
    const [loaded, setLoaded] = React.useState(false)
    const [categories, setCategories] = React.useState([])
    const [banners, setBanners] = React.useState([])
    const [restaurants, setRestaurants] = React.useState([])

    React.useEffect(() => {
        const fetchItems = async () => {
            const categories = await (await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/categorias')).json()
            const banners = await (await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/banner_principal')).json()
            const restaurants = await (await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/restaurantes')).json()
            setCategories(categories)
            setBanners(banners)
            setRestaurants(restaurants)
            setLoaded(true)
        }
        fetchItems()
    }, [])
    return (
        <HomeView>
            <QrCodeImage source={qrCodeImg} />
            <TitleView>
                <TitleText>Restaurantes</TitleText>
            </TitleView>
            {loaded && <>
                <Categories categories={categories}/>
                <Banners banners={banners}/>
                <SubtitleText>Lojas</SubtitleText>
                <Restaurants restaurants={restaurants}/>
            </>}
            {!loaded && <Loading/>}
        </HomeView>
    )
}

export default index