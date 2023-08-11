// 3. Crie um componente de card chamado Card. 
// Este componente deve aceitar propriedades como title, content e imageUrl.
//  Estilize o card usando CSS para que ele exiba o título, o conteúdo e uma imagem de forma agradável.

import { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Exerc3s = () => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: 'https://images.freeimages.com/fic/images/icons/72/harmonia_pastelis/256/hp_dog.png' }} style={styles.image} />
            <Text style={styles.title}>Imagem</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quas magnam corrupti vitae saepe, voluptatibus sint odit laudantium esse quod enim non
         s       maxime nulla cum amet sapiente nisi eum consequatur in!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 350,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    content: {
        fontSize: 14,
    },
});
