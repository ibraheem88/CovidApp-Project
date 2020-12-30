import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import countries from '../screens/countries';
import specific from '../screens/countrySpecific';
import favourites from '../screens/favourites';

const screens={
    Countries: {
        screen: countries,
        navigationOptions: ({navigation})=>({title: "Countries",headerLeft: ()=> 
        (<MaterialIcons name="menu" size={30} style={{paddingLeft:10}} onPress={()=> navigation.openDrawer()} />),
        headerStyle: {backgroundColor: "#90EE90"}})
    },
    specific: {
        screen: specific,
        navigationOptions: {title: "Stats By Country",headerStyle: {backgroundColor: "#90EE90"}}
    },
    Favourites: {
        screen: favourites,
        navigationOptions: ({navigation})=>({title: "Favourites",headerStyle: {backgroundColor: "#90EE90"}})
    },
}
const mainStack= createStackNavigator(screens);

export default mainStack;