/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Card } from "react-native-paper";


const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    padding: ${(props) => props.theme.space[3]};    
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'some restaurant',
        icon,
        photos = [
            'https://images.squarespace-cdn.com/content/v1/53a05cdee4b0c1bc44841a7b/1542171727651-BVFKHUH2MO5HMVF2HJRZ/101+Food+Photography+Tips?format=1000w',
        ],
        address = "111 Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    return(
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};
