import { StyleSheet, Dimensions } from 'react-native'
let width = Dimensions.get('window').width // full width

export default StyleSheet.create({
  searchResultsWrapper: {
    top: 140,
    position: 'absolute',
    width: width
  },
  listWrapper: {
    backgroundColor: '#FFF',
    opacity: 0.9,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
    padding: 10
  },
  display: {
    display: 'none'
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#FDBB22',
    paddingBottom: 10
  },
  icon: {
    marginRight: 5
  },
  primaryText: {
    fontWeight: 'bold'
  }
})
