import React from 'react';
import {Icon} from 'react-native-elements';
import {addNavigationHelpers, StackNavigator, TabNavigator} from "react-navigation";
// import {connect} from "react-redux";
// import PropTypes from 'prop-types';
import HomeScreen from "../scenes/main/MainScreen";
import LoadLogoScreen from "../scenes/LoadLogo";
import Player from '../scenes/main/Player'

export const RootStack = StackNavigator({
        Main: { screen: HomeScreen },
        LoadLogo: { screen: LoadLogoScreen },
        Player: { screen: Player }
    },
    {
        navigationOptions: {header: null},
        initialRouteName: 'LoadLogo',
    }
);
