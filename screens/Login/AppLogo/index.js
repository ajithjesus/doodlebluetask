import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Images from '../../../constant/Images/Images';

export default function AppLogo() {
  return (
    <View style={styles.loginwrapImage}>
      <Image source={Images.LOGIN} style={styles.loginWrapImageWidth} />
    </View>
  );
}
