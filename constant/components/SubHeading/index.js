import React from 'react';
import {Text, View} from 'react-native';
import style from './styles';

export default function SubHeading({title}) {
  return (
    <View style={style.subHeadingContainer}>
      <Text style={style.subHeadingTitle}>{title}</Text>
    </View>
  );
}
