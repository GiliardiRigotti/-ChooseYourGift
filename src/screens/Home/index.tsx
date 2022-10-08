import React, { useContext, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, RefreshControl, Button } from "react-native";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';
import { Container, Title, Wrapper } from "./styled";
import { GiftBox } from "../../components/GiftBox";
import { GameContext } from "../../context/storage";

export function Home() {
    const { getLife, resetLife } = useContext(GameContext)

    /*  useEffect(() => {
         async function loadAd() {
             await setTestDeviceIDAsync('EMULATOR');
             await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712')
             rewardedAd()
         }
         loadAd()
     }, [])
 
     async function rewardedAd() {
         await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
         await AdMobInterstitial.showAdAsync()
         resetLife()
     } */

    return (
        <Container>
            <StatusBar style='light' />
            <Title>
                Escolha seu presente
            </Title>
            <Text>{getLife()}</Text>
            {getLife().length > 0 ? (
                <Wrapper>
                    <GiftBox index={0} />
                    <GiftBox index={1} />
                </Wrapper>
            ) : (
                <>
                    <Text>Não tem mais vidas, assista video para obter mais</Text>
                    <Button title='Ganhar mais vidas' onPress={resetLife} />
                </>

            )}

        </Container>
    );
}