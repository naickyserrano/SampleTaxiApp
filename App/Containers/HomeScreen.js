import React, { PureComponent } from 'react'
import { View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import { createStructuredSelector } from 'reselect'
// import HomeScreenAction from '../Redux/HomeScreenRedux'
import MapComponent from '../Components/MapComponent'
// Styles
import styles from './Styles/HomeScreenStyle'
// import {
//   selectInputLocation
// } from '../Selectors/HomeScreenSelectors'
import RNGooglePlaces from 'react-native-google-places'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class HomeScreen extends PureComponent {
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
      },
      pickUpFocus: false,
      dropOffFocus: false,
      googlePlaces: []
    }

    this.handleGetGooglePlaces = this.handleGetGooglePlaces.bind(this)
  }

  static navigationOptions = {
    title: 'FakeTaxi'
  }

  watchID : ?number = null

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

  handleToggleFocus = (key) => {
    if (key === 'pickUp') {
      this.setState({
        pickUpFocus: true,
        dropOffFocus: false
      })
    } else {
      this.setState({
        pickUpFocus: false,
        dropOffFocus: true
      })
    }
  }

  handleGetGooglePlaces = (value) => {
    if (value.value !== '') {
      RNGooglePlaces.getAutocompletePredictions(value.value, {
        country: 'PH'
      }).then((place) => {
        this.setState({
          googlePlaces: place
        })
      }).catch((err) => console.log(err.message))
    } else {
      this.setState({
        googlePlaces: []
      })
    }
  }

  render () {
    const { region, pickUpFocus, dropOffFocus, googlePlaces } = this.state
    return (
      <View style={styles.container}>
        <MapComponent
          region={region}
          handleGetGooglePlaces={this.handleGetGooglePlaces}
          pickUpFocus={pickUpFocus}
          dropOffFocus={dropOffFocus}
          handleToggleFocus={this.handleToggleFocus}
          googlePlaces={googlePlaces}
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  // inputLocation: selectInputLocation()
})

const mapDispatchToProps = (dispatch) => {
  return {
    // getInputLocation: (payload) => dispatch(HomeScreenAction.getInputLocation(payload)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
