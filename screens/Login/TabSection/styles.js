import {StyleSheet} from 'react-native';
// import COLORS from '../../../constant/Colors/Colors';
import COLORS from '../../../constant/Colors/Colors';
import FONTFAMILY from '../../../constant/FontFamily/FontFamily';

export default StyleSheet.create({
  loginTabSection: {
    width: '100%',
    flexDirection: 'row',
  },
  loginTabWidth: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
  },

  loginTitle: {
    fontFamily: FONTFAMILY.RalewayMedium,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: COLORS.darkGreen,
  },
  loginTitleBorder: {
    borderBottomColor: COLORS.darkGreen,
    borderBottomWidth: 2,
    width: 50,
    height: 10,
  },
  loginInputWrap: {
    padding: 20,
  },
});
