import styled from 'styled-components/native'
import { images } from '../../assets'

export const Container = styled.ImageBackground.attrs(props => ({
    source: images.background,
    resizeMode: "cover"
}))`
    flex: 1;
    align-items: center;
`

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    color:whitesmoke
`