import { Text, View, StyleSheet } from "react-native";

export default function CardBasico() {
    return (
        <View style={style.card}>
            <Text style={style.titulo}>Título del card</Text>
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
        fontSize: 14,
        fontWeight: 'bold',
        },
contenido: {
        marginTop: 4,
        fontSize: 14,
        color: '#333',
        }

})
