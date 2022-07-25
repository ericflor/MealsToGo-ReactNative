import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  function Restaurants() {
    return(
      <RestaurantsScreen />
    )
  }

  function Settings() {
    return(
      <View>
        <Text>Settings</Text>
      </View>
    )
  }

  function Maps() {
    return(
      <View>
        <Text>Maps</Text>
      </View>
    )
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {

                    let iconName;

                    if (route.name === 'Restaurants') {
                      iconName = focused ? 'md-restaurant' : 'md-restaurant-outline';
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'settings-sharp' : 'settings-outline';
                    } else if (route.name === 'Map') {
                      iconName = focused ? 'map' : 'map-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                  },

                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',

              })}>
                <Tab.Screen name="Restaurants" component={Restaurants} />
                <Tab.Screen name="Map" component={Maps} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

