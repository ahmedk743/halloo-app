import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default function ChatItem({item, navigation}) {
  return (
    <TouchableOpacity
      style={{width: '100%'}}
      onPress={() => navigation.navigate('ChatScreen', {item})}>
      <View
        style={{
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 18,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={item.profPic}
              style={{
                width: 60,
                height: 60,
                borderWidth: 3,
                borderColor: '#f49822',
                borderRadius: 50,
                marginLeft: 10,
                marginRight: 15,
              }}
            />
            {item.online && (
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#89fc00',
                  marginLeft: 8,
                  borderRadius: 50,
                  position: 'absolute',
                  bottom: '8%',
                  right: '17%',
                }}
              />
            )}
          </View>
          <View style={{marginBottom: 8}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
              }}>
              <Text style={{}}>{item.name}</Text>
              {item.newMsg && (
                <View
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: '#f49822',
                    marginLeft: 8,
                    borderRadius: 50,
                  }}
                />
              )}
            </View>
            {item.typing ? (
              <Text style={{fontSize: 12, color: 'green'}}>Typing...</Text>
            ) : (
              <Text style={{fontSize: 12}}>{item.lastMsg}</Text>
            )}
          </View>
        </View>

        <View style={{}}>
          <Text style={{marginTop: 13}}>{item.lastMsgTime}</Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#7776',
          alignSelf: 'flex-end',
        }}
      />
    </TouchableOpacity>
  );
}
