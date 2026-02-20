
import React from 'react';
import { Image, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { IMG, ROUTES } from '../utils';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
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
      {/* Profile Header */}
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
          fontSize: 28,
          fontWeight: 'bold',
          color: '#2C3E50',
          textAlign: 'center',
          marginBottom: 5,
        }}>
          PAWHUB
        </Text>
        
        <Text style={{
          fontSize: 16,
          color: '#7F8C8D',
          textAlign: 'center',
        }}>
          Animal Care Volunteer
        </Text>
      </View>

      {/* Profile Information Card */}
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
          marginBottom: 25,
        }}>
          Profile Information
        </Text>
        
        {/* Profile Details */}
        <View style={{ gap: 20 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
          }}>
            <Text style={{
              fontSize: 16,
              color: '#7F8C8D',
              fontWeight: '500',
            }}>
              Email
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#2C3E50',
              fontWeight: '600',
            }}>
              pawhub@gutib.org
            </Text>
          </View>
          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
          }}>
            <Text style={{
              fontSize: 16,
              color: '#7F8C8D',
              fontWeight: '500',
            }}>
              Phone
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#2C3E50',
              fontWeight: '600',
            }}>
              +1 (555) 123-4567
            </Text>
          </View>
          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
          }}>
            <Text style={{
              fontSize: 16,
              color: '#7F8C8D',
              fontWeight: '500',
            }}>
              Member Since
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#2C3E50',
              fontWeight: '600',
            }}>
              January 2024
            </Text>
          </View>
          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
            <Text style={{
              fontSize: 16,
              color: '#7F8C8D',
              fontWeight: '500',
            }}>
              Status
            </Text>
            <View style={{
              backgroundColor: '#D4EDDA',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 20,
            }}>
              <Text style={{
                fontSize: 14,
                color: '#155724',
                fontWeight: '600',
              }}>
                Active
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Activity Stats */}
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
          marginBottom: 25,
        }}>
          Your Impact
        </Text>
        
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View style={{
            alignItems: 'center',
            flex: 1,
          }}>
            <Text style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#E67E22',
              marginBottom: 5,
            }}>
              42
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
            alignItems: 'center',
            flex: 1,
          }}>
            <Text style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#E67E22',
              marginBottom: 5,
            }}>
              128
            </Text>
            <Text style={{
              fontSize: 14,
              color: '#7F8C8D',
              textAlign: 'center',
            }}>
              Volunteer Hours
            </Text>
          </View>
          
          <View style={{
            alignItems: 'center',
            flex: 1,
          }}>
            <Text style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#E67E22',
              marginBottom: 5,
            }}>
              15
            </Text>
            <Text style={{
              fontSize: 14,
              color: '#7F8C8D',
              textAlign: 'center',
            }}>
              Events Joined
            </Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={{ gap: 15 }}>
        <CustomButton
          label="EDIT PROFILE"
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
          onPress={() => console.log('Settings pressed')}
        >
          <Text style={{
            color: '#E67E22',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 1,
          }}>
            SETTINGS
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
            paddingVertical: 16,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#E8E8E8',
          }}
          onPress={() => console.log('Logout pressed')}
        >
          <Text style={{
            color: '#DC3545',
            fontSize: 16,
            fontWeight: '600',
          }}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
