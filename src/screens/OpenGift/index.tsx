import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { Container, Title, TitleBad, TitleGood, Wrapper } from "./styled";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Gift } from "../../components/Gift";
import { images } from "../../assets";
import { GameContext } from "../../context/storage";

interface GiftProps {
    image: any,
    nice: boolean
}

export function OpenGift() {
    const navigation = useNavigation()
    const router = useRoute()
    const { subLife } = useContext(GameContext)
    const index = parseInt(router.params.index, 10)
    const [gift, setGift] = useState<GiftProps[] | null>(null)
    const [random, setRandom] = useState<number>(0)
    useEffect(() => {
        function sortGift() {
            const giftChoose = images.openBox[Math.floor(Math.random() * images.openBox.length)]
            setGift(giftChoose)
            setRandom(Math.floor(Math.random() * 2))
        }
        function life() {
            if (gift !== null) {
                if (index == 0) {
                    if (!gift[random].nice) {
                        console.log('entroue')

                    }
                } else {
                    if (!gift[random == 0 ? 1 : 0].nice.nice) {
                        subLife()
                    }
                }
            }
        }
        sortGift()
        life()

    }, [])
    console.log(index)

    if (gift == null) {
        return (
            <View>
                <Text>
                    Carregando
                </Text>
            </View>
        )
    }
    return (
        <Container>
            {index == 0 ? gift[random].nice ?
                (<TitleGood> Você ganhou um presente otimo! </TitleGood>)
                :
                (<TitleBad>{subLife()}Boa sorte na proxima... </TitleBad>)
                :
                gift[random == 0 ? 1 : 0].nice ?
                    (<TitleGood>Você ganhou um presente otimo!</TitleGood>)
                    :
                    (<TitleBad>{subLife()}Boa sorte na proxima...</TitleBad>)
            }
            <Wrapper>
                <View style={{ borderWidth: 6, borderColor: index === 0 ? 'blue' : 'white', borderRadius: 15 }}>
                    <Gift data={gift[random]} />
                </View>
                <View style={{ borderWidth: 6, borderColor: index === 1 ? 'blue' : 'white', borderRadius: 15 }}>
                    <Gift data={gift[random == 0 ? 1 : 0]} />
                </View>
            </Wrapper>
            <Button onPress={() => {
                navigation.navigate('Home', {
                    onGoBack: () => this.refresh(),
                });
            }} title="Voltar" />
        </Container>
    )
}