/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import PhoneInput from 'react-native-phone-number-input';
import {Checkbox} from 'react-native-paper';

import {FONTS, SIZES, COLORS, images} from '../../../constants';

export default function SignUpScreen({navigation}) {
  const [value, setValue] = useState('');
  const phoneInput = useRef < PhoneInput > null;
  const [formattedValue, setFormattedValue] = useState('');
  const [checked, setChecked] = useState(true);

  const renderBody = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={images.halloo}
          style={{height: 150, width: 150, marginBottom: SIZES.padding}}
          resizeMode="contain"
        />
        <Text style={{color: COLORS.black, ...FONTS.h1}}>
          Welcome to Halloo
        </Text>
        <Text
          style={{
            color: '#0006',
            ...FONTS.body3,
            alignSelf: 'center',
            flexWrap: 'wrap',
            marginBottom: SIZES.padding,
          }}>
          Please Enter Your Phone Number to SignUp
        </Text>

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
          withShadow
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 30,
            paddingHorizontal: 40,
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={COLORS.primary}
          />
          <Text
            style={{
              color: '#0006',
              ...FONTS.body4,
              marginLeft: 10,
            }}>
            By continuing you will receive a verification code to your phone
            number by SMS. Data charges may apply.
          </Text>
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
          onPress={() => navigation.navigate('VerificationScreen')}
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
            LOGIN
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
        paddingTop: 80,
      }}>
      {renderBody()}
      {renderFooter()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
