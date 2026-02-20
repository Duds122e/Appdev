import React, { useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import CustomButton from '../../components/CustomButton';
import images from '../../utils/images';

const { width, height } = Dimensions.get('window');

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation()


  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 20,
      }}
    >
      {/* Logo Container */}
      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
      }}>
        <Image
          source={images.LOGO}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        />
      </View>

      {/* Login Card */}
      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 30,
        width: '100%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
      }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 30,
            color: '#2C3E50',
            textAlign: 'center',
          }}
        >
          Welcome Back
        </Text>
        
        <CustomTextInput
          label={"Username"}
          placeholder={"Enter your username"}
          onChangeText={setUsername}
          textStyle={{ color: '#2C3E50', fontSize: 14, marginBottom: 8 }}
          TextInputStyle={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: '#E67E22',
            paddingHorizontal: 0,
            paddingVertical: 16,
            fontSize: 16,
            marginBottom: 20,
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#F8F9FA',
            borderRadius: 10,
          }}
        />
        
        <CustomTextInput
          label={"Password"}
          placeholder={"Enter your password"}
          onChangeText={setPassword}
          textStyle={{ color: '#2C3E50', fontSize: 14, marginBottom: 8 }}
          TextInputStyle={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: '#E67E22',
            paddingHorizontal: 0,
            paddingVertical: 16,
            fontSize: 16,
            marginBottom: 30,
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#F8F9FA',
            borderRadius: 10,
          }}
        />
        
        <CustomButton
          label={"SIGN IN"}
          mainStyle={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 16,
            backgroundColor: '#E67E22',
            borderRadius: 12,
            width: '100%',
            alignSelf: 'center',
            shadowColor: '#E67E22',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
            marginBottom: 20,
          }}
          textStyle={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 1,
          }}
          route={ROUTES.HOME}
        />
        
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#7F8C8D', fontSize: 14, marginBottom: 5 }}>Don't have an account? </Text>
          <CustomButton
            label={"Create Account"}
            mainStyle={{
              paddingVertical: 4,
            }}
            textStyle={{
              color: '#E67E22',
              fontSize: 16,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            route={ROUTES.REGISTER}
          />
        </View>
      </View>
    </View>
  );
}
