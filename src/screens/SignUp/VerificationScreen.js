import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {Checkbox} from 'react-native-paper';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {FONTS, SIZES, COLORS, images} from '../../../constants';

export default function VerificationScreen({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
          Verification Code
        </Text>
        <Text
          style={{
            color: '#0006',
            alignSelf: 'center',
            flexWrap: 'wrap',
            marginBottom: 6,
            ...FONTS.body4,
          }}>
          We have sent you a code on your phone number.
        </Text>
        <Text
          style={{
            color: '#0006',
            ...FONTS.body3,
            alignSelf: 'center',
            flexWrap: 'wrap',
            marginBottom: SIZES.padding,
          }}>
          Enter Code Below
        </Text>

        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </SafeAreaView>
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
          onPress={() => navigation.navigate('VerificationSuccessScreen')}
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
            VERIFY
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

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  codeFieldRoot: {marginTop: 10},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 38,
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#0005',
    color: COLORS.primary,
    textAlign: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
    textAlignVertical: 'center',
  },
  focusCell: {
    borderColor: COLORS.primary,
  },
});

/**/

/**/
