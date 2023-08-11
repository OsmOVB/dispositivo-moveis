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

  const { View } = require("react-native");

export const Counter = () => {
    return (

        <View>
            <Text>
                Cat Facts
            </Text>
        </View>

    );
}