import {StyleSheet} from 'react-native';
import color from '../../Colors/Colors';
export default StyleSheet.create({
  searchInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.black,
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  loginInput: {
    width: '90%',
  },
});
