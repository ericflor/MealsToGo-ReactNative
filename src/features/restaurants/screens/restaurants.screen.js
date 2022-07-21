import React, { useContext } from 'react';
import styled from "styled-components";
import { Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator } from 'react-native-paper';


export const RestaurantsScreen = () => {

    const {isLoading, error, restaurants} = useContext(RestaurantsContext);

    while(isLoading === true){
        return(
            <ActivityIndicator animating={true} color='tomato' marginTop={155} size='large' />
        )
    }

    if(error === true){
        return(
            <View>
                <Text>
                    HAVING TROUBLE LOADING RESTAURANTS, TRY AGAIN LATER
                </Text>
            </View>
        )
    }

    return(
        <SafeView>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList 
                data={restaurants} 
                renderItem={({item}) => {
       
                    return(
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    )
                }}
                keyExtractor={(item) => item.name} />
        </SafeView>
    )
};

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

