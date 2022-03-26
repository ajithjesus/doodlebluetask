import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenwHeight = Dimensions.get('window').height;

export const WidthDimension = value => {
  return screenWidth * value;
};

export const HeightDimension = value => {
  return screenwHeight * value;
};
