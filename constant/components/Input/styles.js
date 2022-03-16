import {StyleSheet} from 'react-native';
import FONTFAMILY from '../../FontFamily/FontFamily';

export default StyleSheet.create({
  loginInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderColor: '#f1f6fe',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor: '#f1f6fe',
    marginBottom: 10,
    width: '100%',
  },
  loginInput: {
    fontFamily: FONTFAMILY.RalewayMedium,
    fontSize: 14,
    padding: 10,
    height: 40,
    width: '85%',
  },
});
