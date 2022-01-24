/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Searchbar} from 'react-native-paper';

import {FONTS, COLORS, images, icons} from '../../../constants';
import {ChatItem} from '../../components';

export default function ChatScreen({route, navigation}) {
  const {item} = route.params;

  const TouchableIcon = ({icon, onPress, customStyles}) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          tintColor: COLORS.white,
          marginLeft: 20,
          ...customStyles,
        }}
      />
    </TouchableOpacity>
  );

  const renderHeader = () => {
    return (
      <View
        style={{
          paddingHorizontal: 8,
          backgroundColor: COLORS.primary,
          height: 70,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableIcon
            icon={icons.back_arrow}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Image
              source={item.profPic}
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                alignSelf: 'flex-end',
                marginLeft: 8,
                borderWidth: 1,
                backgroundColor: '#FFF',
              }}
            />
            {item.online && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: '#89fc00',
                  marginLeft: 8,
                  borderRadius: 50,
                  position: 'absolute',
                  top: '5%',
                  right: 0,
                }}
              />
            )}
          </View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
              fontWeight: '600',
              marginLeft: 5,
              alignSelf: 'flex-start',
            }}>
            {item.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableIcon
            icon={icons.video_camera}
            onPress={() => Alert.alert('Video Call')}
            customStyles={{width: 28, height: 28}}
          />
          <TouchableIcon
            icon={icons.call}
            onPress={() => Alert.alert('Call')}
          />
          <TouchableIcon
            icon={images.settings}
            onPress={() => Alert.alert('Settings')}
            customStyles={{width: 28, height: 28, marginRight: 5}}
          />
        </View>
      </View>
    );
  };

  const renderRightAlignedChat = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
      }}>
      <View style={{width: '80%'}}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            padding: 18,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            margin: 5,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            Lsd sdfjheasdfjh euias whje sadf ewr gdfg gdfgsdfg dsar.
          </Text>
        </View>

        <Text
          style={{
            ...FONTS.body4,
            color: '#7779',
            alignSelf: 'flex-end',
            marginRight: 5,
          }}>
          Nov 4, 20:18
        </Text>
      </View>
      <Image
        source={item.profPic}
        style={{
          width: 30,
          height: 30,
          borderRadius: 25,
          alignSelf: 'flex-end',
          marginBottom: 25,
          borderWidth: 1,
          borderColor: '#7779',
          marginRight: 8,
        }}
      />
    </View>
  );
  const renderLeftAlignedChat = () => (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <Image
        source={item.profPic}
        style={{
          width: 30,
          height: 30,
          borderRadius: 25,
          alignSelf: 'flex-end',
          marginLeft: 8,
          marginBottom: 25,
          borderWidth: 1,
          borderColor: '#7779',
        }}
      />
      <View style={{width: '80%'}}>
        <View
          style={{
            backgroundColor: '#7779',
            padding: 18,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            margin: 5,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            Lsd sdfjheasdfjh euias whje sadf ewr gdfg gdfgsdfg dsar.
          </Text>
        </View>

        <Text style={{...FONTS.body4, color: '#7779', marginLeft: 5}}>
          Nov 4, 20:18
        </Text>
      </View>
    </View>
  );

  const renderBody = () => {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {item.chats.map(chat =>
            chat.sent ? renderRightAlignedChat() : renderLeftAlignedChat(),
          )}
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 120,
            alignSelf: 'flex-end',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderWidth: 1,
            borderBottomColor: '#fff',
          }}>
          <View></View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {/*Screen Header */}
      {renderHeader()}
      {renderBody()}
    </View>
  );
}

const styles = StyleSheet.create({});
