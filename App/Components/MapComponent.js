import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import styles from './Styles/MapComponentStyle'
import MapView from 'react-native-maps'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

export default class MapComponent extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { region,
      handleGetGooglePlaces,
      inputLocation } = this.props
    return (
      <View style={styles.container}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
        >
          <MapView.Marker
            coordinate={region}
            pinColor='red'
          />
        </MapView>
        <SearchBox
          handleGetGooglePlaces={handleGetGooglePlaces}
        />
        <SearchResult
          inputLocation={inputLocation}
        />
      </View>
    )
  }
}
