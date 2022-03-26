import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import Images from '../../Images/Images';

export default function EmptyRecord() {
  return (
    <View style={styles.emptyRecord}>
      <Image
        style={styles.emptyRecordImg}
        source={Images.EmptyRecord}
        resizeMode={'cover'}
      />
      <Text style={styles.emptyTitle}>No Record Found !!</Text>
    </View>
  );
}
