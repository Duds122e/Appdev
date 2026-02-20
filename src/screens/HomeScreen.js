import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { IMG, ROUTES } from '../utils';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F8F9FA',
      }}
      contentContainerStyle={{
        padding: 20,
        flexGrow: 1,
      }}
    >
      {/* Header Section */}
      <View style={{
        alignItems: 'center',
        marginBottom: 30,
      }}>
        <View style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 100,
          padding: 20,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
        }}>
          <Image
            source={IMG.LOGO}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
            }}
          />
        </View>
        
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#2C3E50',
          textAlign: 'center',
          marginBottom: 10,
        }}>
          Welcome to Gutib
        </Text>
        
        <Text style={{
          fontSize: 16,
          color: '#7F8C8D',
          textAlign: 'center',
          paddingHorizontal: 20,
        }}>
          Animal Charity & Welfare Organization
        </Text>
      </View>

      {/* Main Content Card */}
      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#2C3E50',
          textAlign: 'center',
          marginBottom: 20,
        }}>
          Our Mission
        </Text>
        
        <Text style={{
          fontSize: 16,
          color: '#5D6D7E',
          textAlign: 'center',
          lineHeight: 24,
          marginBottom: 30,
        }}>
          We are dedicated to providing care, shelter, and love for animals in need. 
          Together, we can make a difference in the lives of countless animals.
        </Text>

        {/* Action Buttons */}
        <View style={{ gap: 15 }}>
          <CustomButton
            label="VIEW PROFILE"
            mainStyle={{
              backgroundColor: '#E67E22',
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#E67E22',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
            textStyle={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              letterSpacing: 1,
            }}
            route={ROUTES.PROFILE}
          />
          
          <TouchableOpacity
            style={{
              backgroundColor: '#F8F9FA',
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: '#E67E22',
            }}
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Text style={{
              color: '#E67E22',
              fontSize: 16,
              fontWeight: '600',
              letterSpacing: 1,
            }}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <View style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          padding: 20,
          flex: 1,
          marginRight: 10,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#E67E22',
            marginBottom: 5,
          }}>
            500+
          </Text>
          <Text style={{
            fontSize: 14,
            color: '#7F8C8D',
            textAlign: 'center',
          }}>
            Animals Helped
          </Text>
        </View>
        
        <View style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          padding: 20,
          flex: 1,
          marginLeft: 10,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#E67E22',
            marginBottom: 5,
          }}>
            100+
          </Text>
          <Text style={{
            fontSize: 14,
            color: '#7F8C8D',
            textAlign: 'center',
          }}>
            Volunteers
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;