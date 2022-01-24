import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import PhoneInput from 'react-native-phone-number-input';
import {TouchableRipple} from 'react-native-paper';

import {FONTS, SIZES, COLORS, images} from '../../../constants';

export default function CompleteProfileScreen({navigation}) {
  const [value, setValue] = useState('');
  const phoneInput = useRef < PhoneInput > null;
  const [formattedValue, setFormattedValue] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const renderBody = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h2,
              marginBottom: SIZES.padding,
            }}>
            Complete Profile
          </Text>

          <TouchableOpacity onPress={() => alert('Add a profile pic.')}>
            <Image
              source={images.avatar}
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: '#f4982277',
                tintColor: COLORS.white,
              }}
            />
            <Image
              source={images.camera}
              resizeMode="contain"
              style={{
                width: 45,
                height: 25,
                position: 'absolute',
                tintColor: '#777',
                top: '30%',
                left: '5%',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email"
          />
          <View
            style={{
              marginBottom: 15,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: COLORS.gray,
            }}>
            <PhoneInput
              defaultValue={value}
              defaultCode="PK"
              layout="first"
              onChangeText={text => {
                setValue(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
              }}
            />
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderColor: COLORS.gray,
              marginBottom: 15,
              textAlignVertical: 'top',
            }}
            onChangeText={setBio}
            value={bio}
            placeholder="Bio"
            multiline
            numberOfLines={5}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          width: '100%',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={{
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.white,
            }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        paddingTop: 60,
      }}>
      {renderBody()}
      {renderFooter()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: COLORS.gray,
    marginBottom: 15,
  },
});
