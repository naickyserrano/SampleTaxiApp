import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import MapComponent from '../Components/MapComponent'
// Styles
import styles from './Styles/HomeScreenStyle'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class HomeScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  static navigationOptions = {
    title: 'Home'
  }

  watchID: ?number = null

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let long = position.coords.longitude

      let initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({
        region: initialRegion,
        markerPosition: initialRegion
      })
    },
    (err) => console.error(err),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude
      let long = position.coords.longitude

      let lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({
        region: lastRegion,
        markerPosition: lastRegion
      })
    })
  }

  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render () {
    const { region } = this.state
    return (
      <View style={styles.container}>
        <MapComponent
          region={region}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
