import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { images } from "../../assets";


export function GiftBox() {
    const aninValue = new Animated.Value(1)
    const navigation = useNavigation();

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(aninValue, {
                    toValue: 1.3,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(aninValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [aninValue]);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('OpenGift')}>
            <Animated.Image source={images.gift} style={{ width: 300, height: 300, transform: [{ scale: aninValue }] }} resizeMode='contain' />
        </TouchableOpacity>
    )
}