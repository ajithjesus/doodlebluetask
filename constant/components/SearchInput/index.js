import React from 'react';
import {TextInput, View} from 'react-native';
import colors from '../../Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './styles';

export default function SearchInput({
  handleTooglePress,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View style={style.searchInputContainer}>
      <Ionicons
        onPress={handleTooglePress}
        name="search"
        size={20}
        color={colors.darkblue}
      />
      <TextInput
        style={style.loginInput}
        onChangeText={onChangeText}
        value={value}
        placeholder="search your quotes"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
