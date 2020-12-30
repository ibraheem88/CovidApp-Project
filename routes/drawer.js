import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import global from '../routes/mainStack';
import countries from './countriesStack';
import favourites from './favouritesStack';

const screens={
    World: {
        screen: global,
    },
    Countries: {
        screen: countries,
    },
    Favourites: {
        screen: favourites,
    },
}
const root= createDrawerNavigator(screens);

export default createAppContainer(root);