import styled from 'styled-components/native'

export const SearchCategoryView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`

export const TextInputView = styled.View`
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    margin: 20px 20px;
`

export const SearchInput = styled.TextInput`
    background-color: #eee;
    border: none;
    padding: 7px;
    width: ${({active}) => active ? '70%' : '100%'};
`

export const InputCancel = styled.Text`
    color: #ea1d2c;
    font-size: 18px;
    margin-left: 15px;
`