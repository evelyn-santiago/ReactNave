import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";


const Formulario = () => {
  return (
    <View style={style.main}>
      <SafeAreaView style={style.mains}>
        <Text>Nombre:</Text>
        <TextInput placeholder="Escribe tu nombre" style={style.input} />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#00b5ff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mains: {
    flex: 1,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default Formulario;
