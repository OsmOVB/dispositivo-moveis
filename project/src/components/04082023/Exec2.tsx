// 2. Desenvolva um contador simples usando React. Crie três botões: "+1", "-1" e "Zerar".
//  O contador deve ser exibido na tela e atualizar conforme os botões são clicados. 

import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Exerc2s = () => {
    const [contador, setContador] = useState(0)

    const onPressButtonPLus1 = () => { setContador(contador + 1) }
    const onPressButtonMinus1 = () => { setContador(contador - 1) }
    const onPressButtondefault = () => { setContador(0) }

    return (
        <View style={styles.pai}>
        <Text style={styles.text}>{contador} </Text>
        <TouchableOpacity style={styles.button} onPress={onPressButtonPLus1}>
            <Text style={styles.paragrafo}>
                Soma 1
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressButtonMinus1}>
            <Text style={styles.paragrafo}>
                Subtrai 1
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressButtondefault}>
            <Text style={styles.paragrafo}>
                Default
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    pai: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5e8ff'
    },
    container: {
        flex: 1,
        backgroundColor: '#f5e8ff'
    },
    text: {
        fontSize: 74,
        color: '#f1a',
        fontWeight: 'bold',
    },
    cabecalho: {
        fontSize: 24,
        textAlign: 'center',
    },
    paragrafo: {
        margin: 10
    },    
    button: {
        borderColor: '#a1f',
        borderWidth: 1,
        backgroundColor: 'aqua',
        height: 40,        
    }
});
