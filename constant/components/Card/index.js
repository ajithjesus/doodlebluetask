import React from 'react';
import {View} from 'react-native';
import style from './styles';

export default function Card({children, key}) {
  return (
    <View key={key} style={style.cardContainer}>
      {children}
    </View>
  );
}
