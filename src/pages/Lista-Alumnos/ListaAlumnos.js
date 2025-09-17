import React from 'react';
import { View, StyleSheet, Platform, StatusBar, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaAlumnos = () => {
  return (
    <SafeAreaView style={style.mainS}>
      <View style={style.main}>
  {/* Inicio de AppBar */}
  <View style={style.appBar}>
    <Icon name="arrow-left" size={20} color={'#000'} />
    <Text style={style.appBarTitle}>Lista de Usuarios</Text>
    <View style={{ width: 20 }}></View>
  </View>
  {/* Cierre de AppBar */}

    {/* Inicio de contenido (lista de alumnos) */}
    <ScrollView>
        <Text style={style.sectionTitle}>Lista de Alumnos</Text>
        <View style={style.card}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' }} style={style.avatar} />
        <View style={style.cardInfo}>
           <Text style={style.name}>Evelyn Santiago</Text>
            <Text style={style.userDetails}>Ing. en Sistemas Computacionales</Text>
        </View>
        </View>
    </ScrollView>
    {/* Cierre de contenido (lista de alumnos) */}
</View>
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

