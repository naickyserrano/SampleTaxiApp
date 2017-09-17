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

  render () {
    return (
      <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>PICK UP</Text>
          <View style={styles.inputGroup}>
            <Icon name='search' size={15} color='#FF5E3A' style={styles.icon} />
            <TextInput style={styles.inputSearch} placeholder='Choose pick-up location' />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>DROP OFF</Text>
          <View style={styles.inputGroup}>
            <Icon name='search' size={15} color='#FF5E3A' style={styles.icon} />
            <TextInput style={styles.inputSearch} placeholder='Choose drop-off location' />
          </View>
        </View>
      </View>
    )
  }
}
