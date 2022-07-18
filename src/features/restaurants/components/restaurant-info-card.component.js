/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";


export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            'https://images.squarespace-cdn.com/content/v1/53a05cdee4b0c1bc44841a7b/1542171727651-BVFKHUH2MO5HMVF2HJRZ/101+Food+Photography+Tips?format=1000w',
        ],
        address = "111 Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>{ratingArray.map(() => (<Stars xml={star} />))}</Rating>
                    <SectionEnd>
                        {isClosedTemporarily && <Closed variant="label">CLOSED TEMPORARILY</Closed>}
                        <Spacer position="left" size="large">
                            {isOpenNow && <Open xml={open} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }}></Icon>
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

// STYLING ************************************************************************************************************************

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};  
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`

const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`

const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`

const Section = styled(View)`
    flex-direction: row;
    align-items: center;
`

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`

const Open = styled(SvgXml)`
    flex-direction: row;
    width: ${(props) => props.theme.sizes[1]};
    height: ${(props) => props.theme.sizes[1]}; 
`

const Closed = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.caption}
    color: ${(props) => props.theme.colors.ui.error};
    font-weight: bold;
`

const Icon = styled(Image)`
    width: ${(props) => props.theme.sizes[1]};
    height: ${(props) => props.theme.sizes[1]};
`

const Stars = styled(SvgXml)`
    width: ${(props) => props.theme.sizes[1]};
    height: ${(props) => props.theme.sizes[1]};
`
