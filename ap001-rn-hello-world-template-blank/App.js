//hook
//todo hook tem o nome começando com use
import { useState } from 'react';
import { 
  Button,
  StyleSheet, 
  Text, 
  View
} from 'react-native';

export default function App() {
  // let numero = 1
  //desestruturar, usando os nomes numero e setNumero
  const [numero, setNumero] = useState(1)
  const incrementar = () => setNumero(numero + 1)
  return (
    <View style={styles.container}>
      <Text>{numero}</Text>
      <Button
        onPress={incrementar} 
        title='OK'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
