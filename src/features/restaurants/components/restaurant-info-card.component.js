/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextComp } from "../../../components/typography/text.component";
import { RestaurantCard, RestaurantCardCover, Info, Section, Rating, SectionEnd, Icon, Address, Open, Stars } from "./restaurant-info-card.styles";


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
                <TextComp variant="label">{name}</TextComp>
                <Section>
                    <Rating>{ratingArray.map(() => (<Stars xml={star} />))}</Rating>
                    <SectionEnd>
                        {isClosedTemporarily && <TextComp variant="error">CLOSED TEMPORARILY</TextComp>}
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
