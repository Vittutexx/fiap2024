import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function Tela2({navigation}) {
    return (
      <ScrollView style={styles.container}>
        <Text>Aqui é a tela 2</Text>
        <Button 
        title="Voltar"
        onPress={() => navigation.goBack()}
        />
        <StatusBar style="auto" />
      </ScrollView>
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