import {StyleSheet} from 'react-native';
import color from '../../Colors/Colors';
export default StyleSheet.create({
  cardContainer: {
    shadowColor: color.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
    backgroundColor: color.white,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 10,
  },
});
