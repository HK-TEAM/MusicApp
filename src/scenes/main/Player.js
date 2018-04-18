import React, {Component} from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { Icon }  from 'react-native-elements'

import Video from 'react-native-video';


export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: this.props.navigation.state.params.source,
      name: this.props.navigation.state.params.name
    }
  }
  render() {
    // const source = { src: require(this.state.source.toString()) }
    // console.log('source: ', source)
    console.log(this.state.source.toString())
    return(
      <View style={styles.container}>
				<View style={styles.header}>
					<Icon type='font-awesome' name='headphones' size={50} color='#169f85' />
					<Text style={{ color: '#169f85' }}>- Music App -</Text>
				</View>
        <View style={styles.list}>
          <Text style={{ color:'#fff' }}>{this.state.name}</Text>
          <Video
            repeat
            resizeMode='cover'
            source={require('../../assets/music/Nguoi-La-Oi.mp3')}
            style={{backgroundColor: '#f00'}}
            poster="https://baconmockup.com/300/200/"
          />
        </View>
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
