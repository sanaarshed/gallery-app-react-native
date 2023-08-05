import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ImageGalleryLayout from './src/screens/ImageGalleryLayout';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingScreen from './src/screens/ListingScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const Label = ({text}) => (
  <Text style={{fontSize: 18, fontWeight: '600'}}>{text}</Text>
);

const getOptions = title => ({
  options: () => ({
    tabBarIcon: () => null,
    tabBarLabel: () => <Label text={title} />,
  }),
});

// defining bottom tabs using react native bottom navigation
const BottomTabStack = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <BottomTab.Screen
      name="Gallery"
      component={ImageGalleryLayout}
      {...getOptions('Gallery')}
    />
    <BottomTab.Screen
      name="listLayout"
      component={ListingScreen}
      {...getOptions('List')}
    />
  </BottomTab.Navigator>
);

// defining staack navgation for navigating
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
