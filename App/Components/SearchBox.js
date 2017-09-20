import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/SearchBoxStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SearchBox extends Component {
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

  handleInputSearch = (input) => {
    this.props.handleGetGooglePlaces(input)
  }

  render () {
    return (
      <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>PICK UP</Text>
          <View style={styles.inputGroup}>
            <Icon name='search' size={15} color='#000' style={styles.icon} />
            <TextInput
              style={styles.inputSearch}
              placeholder='Choose pick-up location'
              onChangeText={(value) => this.handleInputSearch(value)}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>DROP OFF</Text>
          <View style={styles.inputGroup}>
            <Icon name='search' size={15} color='#000' style={styles.icon} />
            <TextInput
              style={styles.inputSearch}
              placeholder='Choose drop-off location'
              onChangeText={(value) => this.handleInputSearch(value)}
              autoCorrect={false}
            />
          </View>
        </View>
      </View>
    )
  }
}
