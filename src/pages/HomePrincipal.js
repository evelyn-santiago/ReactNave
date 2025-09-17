import { SafeAreaView,StyleSheet, View, Text, Platform, StatusBar, TouchableOpacity, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardBasico from '../components/CardBasico';
import CardImagen from '../components/CardImagen';
import CardV2 from '../components/CardV2';

 export default function HomePrincipal() {
  return (

    <View style={style.mainS}>
        <Text style={style.title}> Botones Personalizados </Text>
        <CardBasico/>
        <CardImagen/>
        <CardV2/>
        

      </View>


  ); 

}
const style= StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#206d9173',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight:44,
        padding:16
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },

})