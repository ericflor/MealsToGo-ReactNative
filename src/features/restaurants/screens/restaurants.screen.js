/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from "styled-components";
import { Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator } from 'react-native-paper';
import { Search } from '../components/search.component';


export const RestaurantsScreen = ({ navigation }) => {

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
            <Search />
            <RestaurantList 
                data={restaurants} 
                renderItem={({ item }) => {
       
                    return(
                        
                        <TouchableOpacity onPress={() => navigation.navigate("Restaurant Detail")}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
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

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

