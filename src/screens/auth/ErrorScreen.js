import React, { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions, Alert } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../utils';
import CustomButton from '../../components/CustomButton';
import images from '../../utils/images';
import { authLogin } from '../../app/actions';

const { width, height } = Dimensions.get('window');

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.data && auth.data.token) {
    }
  }, [auth.data]);

  const handleLogin = () => {
    console.log('Login button clicked with:', { username, password });
    
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }
    
    console.log('Dispatching authLogin...');
    dispatch(authLogin({ username, password }));
  };

  console.log('Current auth state:', auth);


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
          ERROR
        </Text>
        
     
     
        
     
         
        
    
        </View>
      </View>
    </View>
  );
}
