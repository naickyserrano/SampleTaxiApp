import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/FooterStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Footer extends Component {
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
    const footerIcons = [
      {
        title: 'TaxiCar',
        icon: 'car'
      },
      {
        title: 'TaxiShare',
        icon: 'car'
      },
      {
        title: 'Premium',
        icon: 'car'
      },
      {
        title: 'TaxiBike',
        icon: 'car'
      }
    ]

    return (
      <View style={styles.footerContainer}>
        {
          footerIcons.map((item, index) => {
            return (
              <TouchableHighlight key={index}>
                <View>
                  <Icon style={styles.icon} size={20} name={item.icon} color={index === 0 ? '#FDBB22' : '#000'} />
                  <Text style={[styles.title, (index === 0) && styles.active]}>{item.title}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
}
