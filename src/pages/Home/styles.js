import styled from "styled-components/native";
import React from "react";

export const HomeView = styled.ScrollView`
    flex-direction: column;
    flex: 1;
    background-color: #fefefe;
`

const Container = styled.View`
  width: 100%;
  height: 30px;
  padding: 20px 10px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Image = styled.Image`
    width: 30px;
    height: 30px;
`

export const QrCodeImage = ({ source }) => (
    <Container>
      <Image source={source} />
    </Container>
)

export const TitleView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 20px;
`

export const TitleText = styled.Text`
    font-size: 20px;
    color: #ea1d2c;
    padding-bottom: 10px;
    border-color: #ea1d2c;
    border-style: solid;
    border-bottom-width: 2px;
`

export const CategoriesView = styled.ScrollView`
    height: 110px;
    max-height: 110px;
    margin: 25px 0;
    flex-direction: row;
`

export const CategoryItem = styled.TouchableOpacity`
    width: 150px;
    max-height: 100%;
    margin: 0 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const CategImage = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 5px;
`

const CategoryImageContainer = styled.View`
    width: 100%;
    height: 80px;
`

export const CategoryImage = ({ source }) => (
    <CategoryImageContainer>
      <CategImage source={{uri: source}} />
    </CategoryImageContainer>
)

export const BannerView = styled.ScrollView`
    height: 150px;
    flex-direction: row;
    margin-bottom: 25px;
`

const BannerImg = styled.Image`
    height: 150px;
    border-radius: 5px;
`

const BannerImageContainer = styled.View`
    height: 150px;
    width: 400px;
    margin: 0 15px;
`

export const BannerImage = ({source}) => (
    <BannerImageContainer>
        <BannerImg source={{uri: source}}/>
    </BannerImageContainer>
)

export const SubtitleText = styled.Text`
    margin: 0 20px;
    font-size: 20px;
    font-weight: bold;
    color: #444;
`

export const RestaurantView = styled.View`
    margin: 10px 20px;
    flex-direction: column;
`

export const RestaurantItemView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    height: 80px;
    margin-bottom: 30px;
`

export const RestaurantImage = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: ${() => 70/2 + 'px'};
`

export const RestaurantInfoView = styled.View`
    align-self: flex-start;
    flex-direction: column;
    height: 100%;
    position: relative;
`

export const RestaurantTitle = styled.Text`
    font-weight: bold;
    font-size: 17px;
`

export const RestaurantInfoText = styled.Text`
    color: ${({color}) => color || 'grey'};
`

export const BottomView = styled.View`
    position: absolute;
    bottom: 0;
    flex-direction: row;
`
