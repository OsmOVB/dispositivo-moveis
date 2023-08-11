import axios from "axios";
import { useState } from "react";
import { MyButton } from "../components/03082023/MyButton";

const { View, Text, StyleSheet } = require("react-native");

export const CatFacts = () => {
    const [catFact, setCatFact] = useState('FATO')
    const [catFact2, setCatFact2] = useState('FATO 2')

    const fetchCatFacts = async () => {
        try {
            const { data } = await axios.get('https://catfact.ninja/fact')          
            setCatFact(data)
           
        } catch (error) {
            console.error(error)
        }
    }
    const fetchCatFacts2 = async () => {
        try {
            const {data: data2} = await axios.get('https://catfact.ninja/fact')           
            setCatFact2(data2)
        } catch (error) {
            console.error(error)
        }
    }
    return (

        <View style={styles.container}>
            <Text style={styles.text}>
                Cat Facts
            </Text>          
            <MyButton title={'Fato Aleatório de Gato'} onPressButton={fetchCatFacts} />
            <Text style={styles.data}>{catFact ? catFact.fact : 'Sem dados' }</Text>
            <MyButton title={'Fato Aleatório de Gato'} onPressButton={fetchCatFacts2} />
            <Text style={styles.data}>{catFact2 ? catFact2.fact : 'Sem dados' }</Text>
   
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#f9a',
        height: 730,
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
    data: {
        fontSize: 20,
        textAlign: 'center'

    }
})