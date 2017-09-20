import { DrawerNavigator, DrawerItems } from 'react-navigation'
import React from 'react'
import HomeScreen from '../Containers/HomeScreen'
import { View } from 'react-native'
import styles from './Styles/NavigationStyles'

const SideMenu = (props) => {
  return (
    <View style={styles.container}>
      <DrawerItems {...props} />
    </View>
  )
}

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
  // Default config for all screens
  initialRouteName: 'HomeScreen',
  contentComponent: SideMenu,
  contentOptions: {
    activeTintColor: '#000',
    activeBackgroundColor: '#FDBB22'
  }
})

export default PrimaryNav
