import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, FlatList, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/SearchResultStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SearchResult extends Component {
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

  renderListResults = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.listItemWrapper}>
          <View>
            <Icon style={styles.icon} name='location-on' size={20} color='#7D7D7D' />
          </View>
          <View>
            <Text style={styles.primaryText}>{item.primaryText}</Text>
            <Text>{item.secondaryText}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render () {
    const { inputLocation } = this.props
    return (
      <View style={styles.searchResultsWrapper}>
        <View style={[styles.listWrapper, inputLocation.length <= 0 && styles.display]}>
          <FlatList
            data={inputLocation}
            renderItem={this.renderListResults}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    )
  }
}
