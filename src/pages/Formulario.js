import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";


const Formulario = () => {
  return (
    <View style={style.main}>
      <SafeAreaView style={style.mains}>
        <Text>Nombre:</Text>
        <TextInput placeholder="Escribe tu nombre" style={style.input} />
        <Text style={style.label}>Descripción:</Text>
        <TextInput  multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder="Describe tu personalidad"/>

      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#e2ecf05d",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
    mains: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 16,
    },
    label: {
    fontWeight: 'bold',
    marginBottom: 10,
    },
    input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 10,
    },
    textArea: {
        height: 100, 
    textAlignVertical: 'top',
    }

});

export default Formulario;
