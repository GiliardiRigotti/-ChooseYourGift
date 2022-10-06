import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import { Container, Title, Wrapper } from "./styled";
import { GiftBox } from "../../components/GiftBox";

export function Home() {
    return (
        <Container>
            <StatusBar style='light' />
            <Title>
                Escolha seu presente
            </Title>
            <Wrapper>
                <GiftBox index={0} />
                <GiftBox index={1} />
            </Wrapper>
        </Container>
    );
}