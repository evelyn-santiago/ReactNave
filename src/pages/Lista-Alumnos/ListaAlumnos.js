import React from 'react';
import { View, StyleSheet, Platform, StatusBar, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaAlumnos = () => {
  return (
    <SafeAreaView style={style.mainS}>
      {/* Inicio de AppBar */}
      <View style={style.appBar}>
        <Icon name="arrow-left" size={20} color={'#000'} />
        <Text style={style.appBarTitle}>Lista de Usuarios</Text>
        <View style={{ width: 20 }}></View>
      </View>
      {/* Cierre de AppBar */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#bac5f8ff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }, 
  appBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#e88aff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  appBarTitle: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default ListaAlumnos;

