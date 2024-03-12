import  { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';



export default function App(){

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function validarLogin(login, senha){
    alert.alert(login);

    const loginPadrao = "FIAP";
    const senhaPadrao = "palmeirassemmundial";

    if (login == loginPadrao && senha == senhaPadrao){
      console.warn("Login efetuado com sucesso!");
    } else {
      console.warn("Não foi possivel efetuar o login.");
    }
  }




  return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput 
        style={styles.input}
        stakeholder = "Informe seu login"
        value = {login}
        placeholderTextColor = '#999'
        onChangeText = { (e) => setLogin(e)} />
        

        <Text>Senha</Text>
        <TextInput 
        style={styles.input}
        placeholder='Informe sua senha'
        value={senha}
        placeholderTextColor={'#999'}
        onChangeText = { (e) => setSenha(e)} />
        

        <Button
          title = "Efetuar Login"
          onPress = {(e) =>validarLogin(login, senha)} />

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
  },
  input:{
    borderWidth: 1,
    width: '90%',
    paddingLeft: 15,
    marginBottom: 10
  }
});