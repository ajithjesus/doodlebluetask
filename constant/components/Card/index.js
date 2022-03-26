import React from 'react';
import {View} from 'react-native';
import style from './styles';

export default function Card({children}) {
  return <View style={style.cardContainer}>{children}</View>;
}
