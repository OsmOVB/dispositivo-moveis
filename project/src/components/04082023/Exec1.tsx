//1. Crie um aplicativo React Native que exiba uma página com três
//  componentes: um cabeçalho, um parágrafo de texto e um botão.
//   O botão deve alternar o texto do parágrafo entre "Visível" e "Oculto" quando clicado. 

import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Exerc1s = () => {
  const [showMessage, setShowMessage] = useState(false)
  const onShowMessage = () => {
    setShowMessage(!showMessage)
  }
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.cabecalho}>Cabeçalho</Text>
      </View>
      <View style={styles.view}>
      {showMessage ? (<Text style={styles.paragrafo}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum officiis amet vero pariatur culpa laboriosam? Placeat
          maiores ex consequuntur deleniti voluptatem! In culpa enim
          itaque voluptatum quae architecto sapiente doloribus?</Text>) : <></>}     
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onShowMessage}>
          <Text style={styles.paragrafo}>
            Mostra/Esconde mensagem
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    textAlign: 'center'

  },
  view: {
    backgroundColor:'#1fc',
    borderColor: '#a1f',
    borderWidth: 1,
    height: '20%',
    width: '100%',     
  },
  button: {
    borderColor: '#a1f',
    borderWidth: 1,
    backgroundColor: '#f66',
    height: 100,
    width: '75%',
  }

});
