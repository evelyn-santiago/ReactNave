import {Image, SafeAreaView, StyleSheet, Text,} from 'react-native';

function Homee(){
  return(
    <SafeAreaView style={styles.container}>
      <Image style={{width:150, height:150, borderRadius:5}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'}}/>
      <Text style={styles.h3}> Bienvenidos</Text>
      <Text style={styles.h3}> a la clase de parrafos</Text>
      <Text style={styles.h3}> de materia de Desarrollo de aplicaciones moviles</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#70bcdfff',
  },
  h1:{
    fontSize:20, fontWeight:'bold', marginTop:12,
  }, h2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
});
export default Homee;