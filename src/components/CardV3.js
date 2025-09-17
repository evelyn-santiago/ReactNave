import { Text, View, StyleSheet, Image,TouchableOpacity,  Platform, } from "react-native";

export default function CardV3() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'https://i.blogs.es/f7234d/imagen/500_333.webp' }} />
            <View style={style.card_contenido}>
                <Text style={style.titulo}>Card con img</Text>
            <Text style={style.contenido}>Contenido del card</Text>
            <TouchableOpacity style={[style.botonSombreado]}>
                <Text style={style.textoBoton}>Sombra</Text>
                </TouchableOpacity>

            </View>
            

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
        overflow: 'hidden',
        shadowOffset: {width:0,height: 3 },
    },
    titulo: {
  marginTop: 5,
  fontSize: 14,
  fontWeight: 'bold',
    },
    contenido: {
  marginBottom: 12,
  fontSize: 12,
  color: '#000000',
},
    img: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    },
    card_contenido: {
  padding: 16,
//   backgroundColor: '#ff989873'
},
 botonSombreado: {
  marginTop: 10,
  backgroundColor: '#ff9800',
  paddingVertical: 10,
  paddingHorizontal: 18,
  borderRadius: 10,
  alignSelf: 'flex-start',
  // marginBottom: 15
},
textoBoton: {
  fontWeight: 'bold',
  fontSize: 12,
}

  
})
