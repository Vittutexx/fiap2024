import  { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';



export default function App(){

  return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
        stakeholder = "Informe seu login"
        value = "FIAP"
        placeholderTextColor = '#999' />
        <Text>Senha</Text>
        <TextInput 
        placeholder='Informe sua senha'
        value="palmeirasnaotemmundial"
        placeholderTextColor={'#999'} />
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
});