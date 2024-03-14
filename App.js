import  { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';



export default function App(){

  const [velocidade, setVelocidade] = useState('');
  const [tempo, setTempo] = useState('');

  function calcularDistancia(velocidade, tempo){

    let distancia = velocidade * tempo;
    alert('A distância percorrida foi de: ' + distancia + ' kilometros por hora.');
  }




  return (
      <View style={styles.container}>


        <Text>Velocidade</Text>
        <TextInput 
        style={styles.input}
        placeholder = "Informe a velocidade (em kilometros)"
        value = {velocidade}
        placeholderTextColor = '#999'
        onChangeText = { (e) => setVelocidade(e)} 
        />
        

        <Text>Tempo</Text>
        <TextInput 
        style={styles.input}
        placeholder='Informe o tempo (em horas)'
        value={tempo}
        placeholderTextColor={'#999'}
        onChangeText = { (e) => setTempo(e)} 
        />
        

        <Button
          styles = {styles.button}
          title = "Calcular"
          onPress = {() => {
            calcularDistancia(velocidade, tempo)
          }}
        />

        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  input:{
    borderWidth: 1,
    width: '90%',
    paddingLeft: 15,
    marginBottom: 10
  }
});