import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { Container, Wrapper } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { Gift } from "../../components/Gift";

export function OpenGift() {
    const navigation = useNavigation()
    return (
        <Container>
            <Wrapper>
                <Gift />
                <Gift />
            </Wrapper>
            <Button onPress={() => navigation.navigate('Home')} title="Voltar" />
        </Container>
    )
}