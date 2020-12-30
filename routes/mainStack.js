import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import main from '../screens/main';


const screens={
    main: {
        screen: main,
        navigationOptions: ({navigation})=>({title: "Home",headerLeft: ()=> 
        (<MaterialIcons name="menu" size={30} style={{paddingLeft:10}} onPress={()=> navigation.openDrawer()} />),
        headerStyle: {backgroundColor: "#90EE90"}})
    },
}
const mainStack= createStackNavigator(screens);

export default mainStack;
