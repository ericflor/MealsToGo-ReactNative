import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {

    return(
        <RestaurantsStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}} >
            <RestaurantsStack.Screen name="Restaurantes" component={RestaurantsScreen} />
            <RestaurantsStack.Screen name="Restaurant Detail" component={() => <Text>Restaurant Detail</Text>} />
        </RestaurantsStack.Navigator>
    )
}