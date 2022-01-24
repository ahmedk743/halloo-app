import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
