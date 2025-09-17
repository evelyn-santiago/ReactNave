import { Text, View, StyleSheet, Image } from "react-native";

export default function CardImagen() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'https://i.blogs.es/f7234d/imagen/500_333.webp' }} />
            <Text style={style.titulo}>Card con img</Text>
            <Text style={style.contenido}>Contenido del card</Text>

        </View>

    );
}

const style= StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#282828',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    titulo: {
  marginTop: 5,
  fontSize: 14,
  fontWeight: 'bold',
    },
    contenido: {
    marginTop: 4,
    },
    img: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    }


})
