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
import TrackPlayer from 'react-native-track-player'

// import MusicControl from 'react-native-music-control';

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
	_handlePlay(id, source) {
      console.log('id: ', id)
      console.log('source: ', source)
      const obj = {
         id: id,
         url: require('../../assets/music/Nguoi-La-Oi.mp3'),
         title: 'Track Title',
         artist: 'Track Artist',
         artwork: '',
         key: id
      }

      TrackPlayer.setupPlayer().then(async () => {
          await TrackPlayer.add(obj);

          TrackPlayer.updateOptions({
            // One of RATING_HEART, RATING_THUMBS_UP_DOWN, RATING_3_STARS, RATING_4_STARS, RATING_5_STARS, RATING_PERCENTAGE
              ratingType: TrackPlayer.RATING_5_STARS,

              // The maximum height or width that the artwork can have. It will be resized when necessary. The lower the number is, the lower is the memory used
              maxArtworkSize: 800,

              // An array of media controls capabilities
              // Can contain CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO,
              // CAPABILITY_SKIP_TO_NEXT, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SET_RATING
              capabilities: [
                  TrackPlayer.CAPABILITY_PLAY,
                  TrackPlayer.CAPABILITY_PAUSE
              ],

              // Icons for the notification (if you don't like the default ones)
              playIcon: '<Icon name="play" type="font-awesome" size={20} color="#fff" />',
              pauseIcon:  '<Icon name="play" type="font-awesome" size={20} color="#fff" />',
              stopIcon:  '<Icon name="play" type="font-awesome" size={20} color="#fff" />',
              previousIcon:  '<Icon name="play" type="font-awesome" size={20} color="#fff" />',
              nextIcon:  '<Icon name="play" type="font-awesome" size={20} color="#fff" />',
              icon:  '<Icon name="play" type="font-awesome" size={20} color="#fff" />', // The notification icon

              // Notification Color (Must be an ARGB Hexadecimal number)
              color: 0x2ecc71
          });

          TrackPlayer.play();

      });
	}

  _handleStop() {
    console.log('Stop')
  }

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
        <View style={[styles.button_view, {flexDirection: 'row'}]}>
          <Text style={styles.button} onPress={this._handlePlay()}>Play</Text>
          <Text style={[styles.button, {marginLeft: 5}]} onPress={this._handleStop()}>Stop</Text>
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
					onPress={() => this._handlePlay(id, source)}
			>
				<Icon name='play-circle' type='font-awesome' size={20} color='#00BFFF' style={{flexDirection: 'row', marginRight: 8}} />
				<Text style={{color: '#fff', flexDirection: 'row'}} > {data.item.name}</Text>
			</TouchableOpacity>
		)
	}
}

AppRegistry.registerHeadlessTask('TrackPlayer', () => require('./player-handler.js'));

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
