import React from 'react';
import { View, StyleSheet, Platform, StatusBar,Text } from 'react-native';

const ListaAlumnos = () => {
  return (
    <View style={style.mainS}>
      <Text>Holaaaaaa</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#4367ff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 16
  }
});

export default ListaAlumnos;
