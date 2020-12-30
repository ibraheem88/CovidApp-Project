import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import favourites from '../screens/favourites';

const screens={
    Favourites: {
        screen: favourites,
        navigationOptions: ({navigation})=>({title: "Favourites",headerLeft: ()=> 
        (<MaterialIcons name="menu" size={30} style={{paddingLeft:10}} onPress={()=> navigation.openDrawer()} />),
        headerStyle: {backgroundColor: "#90EE90"}})
    },
}
const mainStack= createStackNavigator(screens);

export default mainStack;