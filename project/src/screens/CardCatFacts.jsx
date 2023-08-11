import { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CardCatFacts = () => {
    const [catFact, setCatFact] = useState([])
    const reponseCatFact = async () => {
        try {
            const { data } = await axios.get('https://catfact.ninja/fact')
            setCatFact(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <TouchableOpacity onPress={reponseCatFact}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Cat Facts
                </Text>
                <Text>{catFact?.length ? catFact.fact.length : 'Sem dados' }</Text>
                <Text style={styles.data}>{catFact?.length ? catFact.fact : 'Sem dados'}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#f9a',
        height: 300,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        margin: 20
    },
    text: {
        fontSize: 35,
        color: '#aaa',
        textAlign: 'center'
    },
});