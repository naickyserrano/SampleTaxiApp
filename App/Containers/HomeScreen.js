import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import MapComponent from '../Components/MapComponent'
// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      region: {
        latitude: 14.586749,
        longitude: 121.095711,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }
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
