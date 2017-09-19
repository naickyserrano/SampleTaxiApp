import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  footerContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  icon: {
    marginVertical: 5,
    alignSelf: 'center'
  },
  title: {
    fontSize: 12
  },
  active: {
    color: '#FDBB22'
  }
})
