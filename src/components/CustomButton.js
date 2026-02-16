import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../utils';
export default function CustomButton({ label, mainStyle, route }) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={mainStyle}
      onPress={()=>nav.navigate(route)}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
