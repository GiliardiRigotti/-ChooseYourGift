import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Container } from "./styled";

interface GiftProps {
    data: {
        image: any,
        nice: boolean
    }
}

export function Gift({ data }: GiftProps) {
    if (data.nice) {
        return (
            <Container>
                <Image source={data.image} style={{ width: 220, height: 220, resizeMode: 'stretch', borderRadius: 8 }} />
            </Container>
        )
    }
    return (
        <Container>
            <Image source={data.image} style={{ width: 220, height: 220, resizeMode: 'stretch', borderRadius: 8 }} />
        </Container>
    )
}