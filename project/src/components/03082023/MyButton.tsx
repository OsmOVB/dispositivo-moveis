import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const MyButton = ({ title, onPressButton }) => {

    return (
        <TouchableOpacity onPress={onPressButton} style={styles.container}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#aaa',
        margin: 40

    },
    text: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'

    },
})
