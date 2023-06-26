import 'react-native-gesture-handler';
import React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductScreen from './screens/Products';
import MappingScreen from './screens/Mapping';
import ListingScreen from './screens/Listing';
import AddProduct from './screens/AddProduct';
import Splash from './screens/Splash';
import Signup from './screens/SignUp';
import Login from './screens/Login';
import HomeScreen from './screens/Home';

function LogoutScreen({navigation}) {
  navigation.navigate('Login');
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Mapping" component={MappingScreen} />
      <Drawer.Screen name="Listing" component={ListingScreen} />
      <Drawer.Screen name="Log Out" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Signup}
          name="Signup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Listing" component={ListingScreen} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
