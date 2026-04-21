import React, { useState } from 'react';
import { Text, View, ScrollView, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import images from '../../utils/images';

const { width, height } = Dimensions.get('window');

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [accepted, setAccepted] = useState(false);

    const navigation = useNavigation();

    const onRegister = () => {
        if (!firstName || !lastName || !birthdate) {
            Alert.alert('Missing fields', 'Please fill First Name, Last Name and Birthdate');
            return;
        }
        if (!accepted) {
            Alert.alert('Terms', 'You must accept terms and conditions to register');
            return;
        }

        Alert.alert('Success', 'Registration complete');
        navigation.navigate(ROUTES.LOGIN);
    };

    return (
        <ScrollView 
            contentContainerStyle={{ 
                flexGrow: 1, 
                justifyContent: 'center',
                backgroundColor: '#F8F9FA',
                padding: 20
            }}
        >
            <View style={{ 
                width: '100%', 
                alignItems: 'center',
                paddingHorizontal: 20
            }}>
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
                
                {/* Registration Card */}
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
                        Create Account
                    </Text>
                
                <CustomTextInput
                    label={'First Name'}
                    placeholder={'Enter First Name'}
                    onChangeText={setFirstName}
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
                    containerStyle={{ padding: 6 }}
                />

                <CustomTextInput
                    label={'Middle Name'}
                    placeholder={'Enter Middle Name'}
                    onChangeText={setMiddleName}
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
                    containerStyle={{ padding: 6 }}
                />

                <CustomTextInput
                    label={'Last Name'}
                    placeholder={'Enter Last Name'}
                    onChangeText={setLastName}
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
                    containerStyle={{ padding: 6 }}
                />

                <CustomTextInput
                    label={'Birthdate'}
                    placeholder={'YYYY-MM-DD'}
                    onChangeText={setBirthdate}
                    textStyle={{ color: '#2C3E50', fontSize: 14, marginBottom: 8 }}
                    TextInputStyle={{
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderBottomColor: '#E67E22',
                      paddingHorizontal: 0,
                      paddingVertical: 16,
                      fontSize: 16,
                      marginBottom: 25,
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: '#F8F9FA',
                      borderRadius: 10,
                    }}
                    containerStyle={{ padding: 6 }}
                />

                {/* Enhanced Checkbox */}
                <View style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    marginVertical: 20,
                    backgroundColor: '#F8F9FA',
                    padding: 15,
                    borderRadius: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => setAccepted(!accepted)}
                        style={{
                            width: 24,
                            height: 24,
                            borderWidth: 2,
                            borderColor: '#E67E22',
                            backgroundColor: accepted ? '#E67E22' : 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 6,
                            marginRight: 12,
                        }}
                    >
                        {accepted ? <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>✓</Text> : null}
                    </TouchableOpacity>
                    <Text style={{ 
                        color: '#2C3E50', 
                        fontSize: 14, 
                        flex: 1,
                        lineHeight: 20
                    }}>
                        I agree to the Terms and Conditions and Privacy Policy
                    </Text>
                </View>

                {/* Enhanced Register Button */}
                <CustomButton
                    label={'CREATE ACCOUNT'}
                    mainStyle={{ 
                        backgroundColor: '#E67E22', 
                        borderRadius: 12, 
                        width: '100%', 
                        paddingVertical: 16, 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        shadowColor: '#E67E22',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 8,
                        marginBottom: 20,
                    }}
                    textStyle={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        fontSize: 16,
                        letterSpacing: 1,
                    }}
                    onPress={onRegister}
                />
                
                {/* Login Link */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#7F8C8D', fontSize: 14, marginBottom: 5 }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                        <Text style={{ 
                            color: '#E67E22', 
                            fontSize: 16, 
                            fontWeight: '600',
                            textDecorationLine: 'underline',
                        }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;
