import React from 'react';
import styled from "styled-components";
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';


export const RestaurantsScreen = () => (

    <SafeView>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <RestaurantList 
            data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]} 
            renderItem={() => 
                <Spacer position="bottom" size="large">
                    <RestaurantInfoCard />
                </Spacer>} 
            keyExtractor={(item) => item.name} />
    </SafeView>
);

// STYLES *********************************************************************************************************************

const SafeView = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

