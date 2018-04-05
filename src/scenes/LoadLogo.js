import React, {Component} from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Icon }  from 'react-native-elements'
import {NavigationActions} from 'react-navigation'

export default class MainScreen extends Component {
	componentWillMount() {
        if(Platform.OS === 'android') {
            setTimeout(() => {this.resetToScreen('Main')}, 1000)
        }

        if(Platform.OS === 'ios') {
            this.resetToScreen('Main')
        }

        console.disableYellowBox = true;
    }

    resetToScreen(screen) {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: screen})]
        }));
    }

	render() {
		return(
			<View style={styles.container}>
				<Icon type='font-awesome' name='headphones' size={50} color='#169f85' />
				<Text style={{ color: '#169f85' }}>- Music App -</Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
	}
})
