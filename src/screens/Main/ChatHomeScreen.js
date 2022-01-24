/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {Searchbar} from 'react-native-paper';

import {FONTS, COLORS, images, dummyData} from '../../../constants';
import {ChatItem} from '../../components';

export default function ChatHomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');

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
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
            fontWeight: '600',
            marginLeft: 5,
          }}>
          CHATS
        </Text>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor={COLORS.primary}
          style={{
            width: '65%',
            height: 45,
            margin: 10,
            borderRadius: 25,
            textAlignVertical: 'center',
          }}
          inputStyle={{
            ...FONTS.body2,
            fontWeight: '600',
          }}
        />
        <TouchableOpacity>
          <Image
            source={images.settings}
            style={{width: 24, height: 24, tintColor: COLORS.white}}
            onPress={() => alert('Settings hain.')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={dummyData.chatItems}
          keyExtractor={item => `Chats-${item.id}`}
          renderItem={({item}) => (
            <ChatItem navigation={navigation} item={item} />
          )}
        />
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
