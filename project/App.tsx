
import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MyButton } from './src/components/03082023/MyButton';
import { Exerc1s } from './src/components/04082023/Exec1';
import { Exerc2s } from './src/components/04082023/Exec2';
import { Exerc3s } from './src/components/04082023/Exec3s';
import { CatFacts } from './src/screens/CatFacts';
import { CardCatFacts } from './src/screens/CardCatFacts';
// import {CatFacts} from '.src/components/screens/CatFacts';

function App(): JSX.Element {
  // export default App(){
  // const [contador, setContador] = useState(0)
  // const [showMessage, setShowMessage] = useState(false)

  // useEffect(() => {
  //   console.log('montagem');
  // }, [])
  // useEffect(() => {
  //   console.log('atualizadoddd');
  // }, [contador])
  // useEffect(() => {
  //   console.log('mensagem alterada');
  // }, [showMessage])

  // const onPressButton = () => { setContador(contador + 1) }
  // const onPressButtonPlus2 = () => { setContador(contador + 2) }
  // const onPressButtonMinus3 = () => { setContador(contador - 3) }

  // const onShowMessage = () => {
  //   setShowMessage(!showMessage)
  // }
  return (

    <SafeAreaView style={styles.container}>
      {/* <CatFacts/> */}
      <CardCatFacts/>
    </SafeAreaView>
    
    

  );
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
    flex: 3,
  },
  view: {
    borderColor: '#a1f',
    borderWidth: 1,
    height: 100,
    width: '100%',
  },

});

export default App;

      {/* <Exerc1s/> */}
      {/* <Exerc2s/> */}
      {/* <Exerc3s/> */}      
      {/* <Button title='CONTADOR +1' onPress={() => onPressButton()} />
      <Button title='CONTADOR +2' onPress={() => onPressButtonPlus2()} />
      <Button title='MENOS 3' onPress={() => onPressButtonMinus3()} />
      {showMessage ? (<Text>Minha Mensagem alterada</Text>) : <></>}
      <View style={{ margin: 20 }}></View> */}
      {/* <Button title='ALTERA MENSAGEM' onPress={
        onShowMessage
      } /> */}
      {/* <MyButton title={'contador personalizado'} onPressButton={onPressButton}/> */}
