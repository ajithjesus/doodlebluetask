import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './styles';

export default function Header({handleTooglePress, handleHeartPress}) {
  return (
    <View style={style.mainContainer}>
      <Ionicons
        onPress={handleTooglePress}
        name="menu"
        size={20}
        color={colors.darkblue}
      />
      <Text style={style.headerTitle}>Quotes</Text>
      <Ionicons
        onPress={handleHeartPress}
        name="heart"
        size={20}
        color={colors.red}
      />
    </View>
  );
}
