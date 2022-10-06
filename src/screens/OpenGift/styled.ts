import styled from 'styled-components/native'
import { images } from '../../assets'

export const Container = styled.ImageBackground.attrs(props => ({
    source: images.background,
    resizeMode: "cover"
}))`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`

export const TitleGood = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #b186f1;
`

export const TitleBad = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    color:#ff6961;
`