import {StyleSheet} from 'react-native';
import colors from '../../constant/Colors/Colors';
import {WidthDimension} from '../../utitlites/dimension';
export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  categoriesContainer: {
    marginVertical: 5,
  },
  categoriesTitle: {
    padding: 4,
    borderColor: colors.black,
    borderWidth: 1,
    marginRight: 10,
    textAlign: 'center',
    width: WidthDimension(0.14),
    height: 30,
    borderRadius: 10,
    color: colors.black,
  },
  categoriesTitleHighlight: {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    borderColor: colors.darkGreen,
  },
  flatlistContainer: {
    flexGrow: 1,
  },
});
