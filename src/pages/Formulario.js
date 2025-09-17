import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, SafeAreaView,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Formulario = () => {
  return (
    <View style={style.main}>
      <SafeAreaView style={style.mains}>
        <Text style={style.titulo}>Registro de alumno</Text>
        <Text>Nombre:</Text>
        <TextInput placeholder="Escribe tu nombre" style={style.input} />
        <Text style={style.bold}>Carrera</Text>
        <TextInput editable={false} style={style.input} placeholder="Escribe tu Carrera"/>
        <Text style={style.label}>Descripción:</Text>
        <TextInput  multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder="Describe tu personalidad"/>
        <Text style={style.label}>Correo Electrónico</Text>
        <TextInput style={style.input} placeholder="Ingrese el correo" keyboardType="email-address" />
        <Text style={style.label}>Contraseña</Text>
        <TextInput style={style.input} placeholder="************" secureTextEntry />
        <Text style={style.label}>Telefons:</Text>
        <TextInput style={style.input} placeholder="123456" keyboardType="phone-pad" />

        <TouchableOpacity style={style.botonConIcono}>
                    <Icon name="send" size={20} color="#fff" style={style.iconoIzquierda} />
                    <Text style={style.textoBoton}>Boton Grande</Text>
         </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fafafafb",
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
    backgroundColor: '#f3fcfbff',
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
    },
    botonConIcono: {
        backgroundColor: '#08bcc2ee',
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15
    },
    iconoIzquierda: {
        marginRight: 10
    },

});

export default Formulario;
