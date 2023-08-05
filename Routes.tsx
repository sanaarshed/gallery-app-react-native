import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ImageGalleryLayout from './src/components/ImageGalleryLayout';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingScreen from './src/components/ListingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const BottomTabStack = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <BottomTab.Screen
      name="Gallery"
      component={ImageGalleryLayout}
      options={() => ({
        tabBarIcon: () => <Icon name="home" />,
      })}
    />
    <BottomTab.Screen name="listLayout" component={ListingScreen} />
  </BottomTab.Navigator>
);

function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="BottomTabStack"
          component={BottomTabStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;