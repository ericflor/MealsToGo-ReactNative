import React from 'react';
import styled from "styled-components";
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';


const SafeView = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;


export const RestaurantsScreen = () => (

    <SafeView>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCard />
        </RestaurantListContainer>
    </SafeView>
);