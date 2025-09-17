import { SafeAreaView,StyleSheet, View, Text, Platform, StatusBar, TouchableOpacity, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

 export default function BotonesV2() {
  return (

    <View style={style.mainS}>
        <Text style={style.title}> Botones Personalizados </Text>

            <TouchableOpacity style={style.botonGrande}>
            <Text style={style.textoBoton}>Boton Grande</Text>
            </TouchableOpacity>

            {/* Icono */}
            <TouchableOpacity style={style.botonConIcono}>
            <Icon name="send" size={20} color="#fff" style={style.iconoIzquierda} />
            <Text style={style.textoBoton}>Boton Grande</Text>
            </TouchableOpacity>

            {/* Botón sombrado */}
            <TouchableOpacity style={[style.botonSombreado, style.sombra]}>
            <Text style={style.textoBoton}>Sombra</Text>
            </TouchableOpacity>

      </View>


  ); 

}
const style= StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#5c8ea5ff',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight:44,
        padding:16
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    textoBoton: {
        color: '#848484',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
     },
    botonGrande: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        alignSelf: 'center'
    },
    botonConIcono: {
        backgroundColor: '#c2a608',
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
    botonSombreado: {
        marginTop: 10,
        backgroundColor: '#c98730ff',
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 10,
    },
  sombra: {
    ...Platform.select({
      android: {
        elevation: 6,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },

})