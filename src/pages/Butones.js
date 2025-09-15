import { SafeAreaView,StyleSheet, View, Text, Platform, StatusBar, TouchableOpacity, Touchable} from 'react-native/types_generated/index';


 export default function Butones() {
  return (
    <View style={style.mainS}>
        <Text style={style.h1}>Botones</Text>
{/* btoton1 */}
        <TouchableOpacity style={style.botonBasico}>
            <Text style={style.text}>Boton 1</Text>
        </TouchableOpacity>
{/* btoton2 */}
        <TouchableOpacity style={style.botonIcono}>
            <Text style={style.text}>Boton Icono</Text>
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
    h1:{
    fontSize: 25,
    fontWeight: 'bold',
    },
    botonBasico: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    }, 
    text:{
        color: '#050000',
        textAlign:'center',
        fontWeight:'bold',

    }

})