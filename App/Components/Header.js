import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/HeaderStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
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
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name='menu'size={20} style={styles.headerIcon} />
        </TouchableHighlight>
        <Text style={styles.logoText}>FakeTaxi</Text>
        <Icon name='card-giftcard' size={20} style={styles.headerIcon} />
      </View>
    )
  }
}
