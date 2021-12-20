import React from 'react'
import { BannerImage, BannerView } from './styles'

const Banners = ({banners}) => {
    return (
        <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
            {banners.map(banner => (
                <BannerImage key={banner.id} source={banner.banner_img_url}/>
            ))}
        </BannerView>
    )
}

export default Banners
