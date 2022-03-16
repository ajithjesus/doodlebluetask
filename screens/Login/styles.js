import {StyleSheet} from 'react-native';
import Colors from '../../constant/Colors/Colors';
import FontFamily from '../../constant/FontFamily/FontFamily';

export default StyleSheet.create({
  safeAreaFlex: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },

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
    fontFamily: 'Raleway-Black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: Colors.darkGreen,
  },
  loginTitleBorder: {
    borderBottomColor: Colors.darkGreen,
    borderBottomWidth: 2,
    width: 50,
    height: 10,
  },
  loginInputWrap: {
    padding: 20,
  },

  loginForgotText: {
    textAlign: 'right',
    fontFamily: FontFamily.RalewayMedium,
    fontSize: 12,
  },
  loginButtonPaddingTop: {
    paddingTop: 40,
  },
  loginTermsCondition: {
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: FontFamily.RalewayMedium,
    fontSize: 12,
  },
  loginTermsConditionInner: {
    fontWeight: 'bold',
    fontFamily: FontFamily.RalewayBold,
    color: Colors.darkGreen,
  },
});
