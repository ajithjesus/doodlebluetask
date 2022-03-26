import {StyleSheet} from 'react-native';
import color from '../../Colors/Colors';
import fontFamily from '../../FontFamily/FontFamily';
export default StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerTitle: {
    fontFamily: 'Raleway-Black',
    fontWeight: 'bold',
    fontSize: 16,
    color: color.darkblue,
  },
});
