import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }} style={{ width: 150, height: 150, borderRadius:50 }} />
      <Text style={styles.h2}>Bienvenido </Text>
      <Text style={styles.h2}>a la clase de párrafos</Text>
      <Text style={styles.h3}>de la materia de Desarrollo de aplicaciones móviles</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74bad8ff',
    padding: 20,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  h3: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
});
