import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function ItemDaLista({ titulo, estado, onPress }) {
    return (
        <TouchableOpacity style={style.item} onPress={onPress}>
            <Text style={[ style.text, { textDecorationLine: estado ? 'line-through' : 'none', textDecorationStyle: 'solid' }]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
    },

    text: {
        fontSize: 16,
    },
});