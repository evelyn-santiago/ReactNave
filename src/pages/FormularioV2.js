import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, SafeAreaView,Image, ScrollView, Dimensions } from "react-native";


const {width }= Dimensions.get('window')

const FormularioV2 = () => {
  return (
    
        <SafeAreaView style={style.mains}>
            <ScrollView>
            <Text style={style.titulo}>Registro de alumno</Text>
                <View style={style.container}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={style.avatar} />
                </View>
            </ScrollView>
      </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fffffffb",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
    mains: {
    flex: 1,
    backgroundColor: '#fbfffeff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 16,
    },
    container:{
        width: '100%',
        backgroundColor: '#ffffffc7',
        borderRadius:15,
        padding:20,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.05,
        shadowOffset:{width:0, height:4},
        shadowRadius:10,
        elevation:5
    },
    avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#dddddd'
    }



   
});

export default FormularioV2;
