import { SafeAreaView,StyleSheet, View, Text, Platform, StatusBar} from 'react-native';

 export default function Butones() {
  return (
    <View style={style.mainS}>
        <Text>Botones</Text>
      </View>
  ); 

}
const style= StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#5c8ea5ff',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight:44,
        padding:16
    }

})