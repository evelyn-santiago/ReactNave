import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function RegistroAlumno() {
  return (
    <SafeAreaView style={style.mains}> 
      <ScrollView>
        <Text style={style.titulo}>Registro de Alumno</Text>
        <View style={style.container}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={{ width: width * 0.35, height: width * 0.35, borderRadius: (width * 0.35)/2, marginBottom: 20, borderWidth: 2, borderColor: '#a3c9a8' }} />
        </View>
        <Text style={style.name}>Evelyn Santiago</Text>
        <View style={style.infoContainer}>
          <Text style={style.label}>Carrera</Text>
          <Text style={style.info}>Ing. Sistemas Computacionales</Text>
          <Text style={style.label}>Especialidad</Text>
          <Text style={style.info}>Desarrollo de Software</Text>
          <Text style={style.label}>Correo</Text>
          <Text style={style.info}>evelyn123@gmail.com</Text>
          <Text style={style.label}>Teléfono</Text>
          <Text style={style.info}>0000000000</Text>
          <Text style={style.label}>NC</Text>
          <Text style={style.info}>000000000</Text>
        </View>
        <View style={style.textoBotonConIcono}>
          <Text style={[style.size, style.color, style.icono]}>Guardar</Text>
        </View>
        <TouchableOpacity style={style.botonConIcono}>
          <Icon name="save" size={20} color="#fff" style={style.iconoIzquierda} />
          <Text style={style.textoBoton}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fffffffb",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2e4057",
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 20,
  },
  mains: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 16,
  },
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5
  },
  avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#a3c9a8'
  },
  name: {
    fontWeight: '600',
    fontSize: 17,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 15,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 5,
    color: '#2c3e50',
  },
  info: {
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: '#f5f6fa',
    padding: 10,
    marginBottom: 10,
    color: '#2c3e50'
  },
  botonConIcono: {
    backgroundColor: '#3a7f59',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    width: '80%',
    shadowColor: '#3a7f59',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  iconoIzquierda: {
    marginRight: 10
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center'
  }
});
