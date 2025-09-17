import React from 'react';
import { View, StyleSheet, Platform, StatusBar, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
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
        <ScrollView style={{ padding: 16 }}>
          <Text style={style.sectionTitle}>Alumnos de aplicaciones Moviles</Text>
          <View style={style.card}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' }} style={style.avatar} />
            <View style={style.cardInfo}>
              <Text style={style.name}>Evelyn Santiago</Text>
              <Text style={style.userDetails}>Ing. en Sistemas Computacionales</Text>
              <TouchableOpacity style={style.saveButton}>
                <Text style={style.saveButtonText}>Ver más</Text>
              </TouchableOpacity>
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
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 16,
  },
  card: {
    padding: 16,
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 5
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6
  },
  userDetails: {
    fontSize: 14,
    marginBottom: 10
  },
  saveButton: {
    backgroundColor: '#0e56ff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start'
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
});

export default ListaAlumnos;
