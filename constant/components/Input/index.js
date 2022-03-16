import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../Colors/Colors';

export default function Input({
  onChangeText,
  name,
  value,
  placeholder,
  secureTextEntry,
  onPress,
  showPassword,
  iconType,
}) {
  const IconType = iconType === 'email' ? 'person' : 'lock-closed';
  return (
    <View style={styles.loginInputContainer}>
      <Ionicons name={IconType} size={20} color={COLORS.darkblue} />
      <TextInput
        style={styles.loginInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        name={name}
      />
      {IconType === 'lock-closed' && (
        <Ionicons
          onPress={onPress}
          name={showPassword ? 'eye-off' : 'eye'}
          size={20}
          color={COLORS.darkblue}
        />
      )}
    </View>
  );
}
