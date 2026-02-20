import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function CustomTextInput({
    label,
    placeholder,
    onChangeText,
    textStyle,
    TextInputStyle,
}) {
    return (
        <View>
        <Text style={textStyle}>{label}</Text>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#999"
            onChangeText={onChangeText}
            style={[TextInputStyle, { color: '#2C3E50' }]}
        />
        </View>
    );
}