import {StyleSheet} from 'react-native';
import color from '../../Colors/Colors';
import fontFamily from '../../FontFamily/FontFamily';
import {HeightDimension, WidthDimension} from '../../../utitlites/dimension';
export default StyleSheet.create({
  emptyRecord: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyRecordImg: {
    width: WidthDimension(1),
    height: HeightDimension(0.3),
  },
  emptyTitle: {
    color: color.black,
    fontFamily: fontFamily.RalewayMedium,
    fontSize: 16,
  },
});
