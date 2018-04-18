import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  AppRegistry
} from 'react-native'
import MusicControl from 'react-native-music-control'
import { Icon }  from 'react-native-elements'

var RNFS = require('react-native-fs')

const data = [
	{
		'id': 1,
		'name': 'Co Gai',
		'source': '../../assets/music/Co-Gai.mp3'
	},
	{
		'id': 2,
		'name': 'Minh cuoi nhau di',
		'source': '../../assets/music/Minh-Cuoi-Nhau-Di.mp3'
	},
	{
		'id': 3,
		'name': 'Ngam hoa le roi',
		'source': '../../assets/music/Ngam-Hoa-Le-Roi.mp3'
	},
	{
		'id': 4,
		'name': 'Nguoi la oi',
		'source': '../../assets/music/Nguoi-La-Oi.mp3'
	},
]

export default class MainScreen extends Component {

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Icon type='font-awesome' name='headphones' size={50} color='#169f85' />
					<Text style={{ color: '#169f85' }}>- Music App -</Text>
				</View>

				<View style={styles.list}>
					{this.renderListMusic()}
				</View>
			</View>
		)
	}

	renderListMusic() {
		return(
			<FlatList
          data={data}
          keyExtractor={this.keyNameExtractor()}
          renderItem={(item)=>this.renderItem(item)}
			/>
		)
	}

	keyNameExtractor(item, index) {
		return index
	}

	renderItem(data) {
    const id = data.item.id
    const source = data.item.source
		return(
			<TouchableOpacity
					style={{flexDirection: 'row', marginBottom: 10}}
          onPress={() => this.props.navigation.navigate('Player', {source: source, name: data.item.name})}
			>
				<Icon name='play-circle' type='font-awesome' size={20} color='#00BFFF' style={{flexDirection: 'row', marginRight: 8}} />
				<Text style={{color: '#fff', flexDirection: 'row'}} > {data.item.name}</Text>
			</TouchableOpacity>
		)
	}
}

// AppRegistry.registerHeadlessTask('TrackPlayer', () => require('./player-handler.js'));

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		// width: 320
	},

	header: {
		flex: 1,
		marginTop: 30,

	},

	borderBottom: {
		borderBottomWidth: 1,
		borderBottomColor: '#169f85',
		marginTop: 20
	},

	list: {
		flex: 2
	},

  button_view: {
    marginBottom: 50,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#00BFFF',
    padding: 5,
    borderRadius: 5,
    color: '#fff',

  }
})
