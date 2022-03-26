import {StyleSheet} from 'react-native';
import colors from '../../../constant/Colors/Colors';
import fontFamily from '../../../constant/FontFamily/FontFamily';

export default StyleSheet.create({
  cardMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeartContianer: {
    textAlign: 'right',
  },
  cardImgContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  cartTitle: {
    fontFamily: fontFamily.RalewayBold,
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.darkblue,
    paddingLeft: 10,
  },
  cardAuthContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  cardAuthor: {
    fontFamily: fontFamily.RalewayMedium,
    fontSize: 12,
    color: colors.darkblue,
  },
});
