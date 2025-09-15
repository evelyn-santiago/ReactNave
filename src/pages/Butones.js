import { SafeAreaView,StyleSheet, View, Text, Platform, StatusBar, TouchableOpacity, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


 export default function Butones() {
  return (
    <View style={style.mainS}>
        <Text style={style.h1}>Botones</Text>
        {/* boton 1 */}
        <TouchableOpacity style={style.botonBasico}>
        <Text style={style.text}>Boton 1</Text>
        </TouchableOpacity>
 {/* boton 2 */}
        <TouchableOpacity style={style.botonIcono}>
        <Icon name="rocket" size={20} style={style.iconB}/>
        <Text style={style.text}>Boton Icono</Text>
        </TouchableOpacity>
{/* boton 3 */}
        <TouchableOpacity style={style.botonIcono}>
        <Text style={style.text}>Siguiente</Text>
        <Icon name="block" size={20} color="#000" style={style.iconRight}/>
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

    }, botonIcono: {
        backgroundColor: '#fff',
        fontSize: 30,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        }, 
        iconB:{
            color:'#7a1a1aff',
        }


})