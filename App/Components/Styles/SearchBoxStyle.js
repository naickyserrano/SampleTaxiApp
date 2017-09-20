import { StyleSheet, Dimensions } from 'react-native'
let width = Dimensions.get('window').width // full width

export default StyleSheet.create({
  searchBox: {
    top: 0,
    position: 'absolute',
    width: width
  },
  inputWrapper: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: '#FFF',
    borderColor: '#FDBB22',
    borderWidth: 1,
    opacity: 0.9,
    borderRadius: 7,
    padding: 10
  },
  inputSearch: {
    fontSize: 14,
    flex: 1
  },
  inputGroup: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    backgroundColor: 'transparent',
    marginRight: 5
  },
  label: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 5
  }
})
