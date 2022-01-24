import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {FONTS, SIZES, COLORS, images} from '../../../constants';

export default function VerificationSuccessScreen({navigation}) {
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

        <Image
          source={images.success}
          style={{
            height: 110,
            width: 110,
            marginBottom: SIZES.padding,
            tintColor: COLORS.white,
            backgroundColor: COLORS.primary,
            borderRadius: 70,
          }}
        />

        <Text style={{color: COLORS.black, ...FONTS.h1}}>
          Verification Successful
        </Text>
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
          onPress={() => navigation.navigate('CompleteProfileScreen')}
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
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        paddingTop: 80,
      }}>
      {renderBody()}
      {renderFooter()}
    </View>
  );
}

const styles = StyleSheet.create({});

/**/

/**/
