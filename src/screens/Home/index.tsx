import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import { Container, Title, Wrapper } from "./styled";
import { GiftBox } from "../../components/GiftBox";

export function Home() {
    return (
        <Container>
            <StatusBar hideTransitionAnimation="fade" />
            <Title>
                Escolha seu presente
            </Title>
            <Wrapper>
                <GiftBox />
                <GiftBox />
            </Wrapper>
        </Container>
    );
}