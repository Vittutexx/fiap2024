import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vitor Teixeira Silva RM: 552228 - 2TDSS</Text>
      <Text style={styles.trabalhadores}>Trabalhadores do mundo inteiro, uni-vos! ☭</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderWidth: 3,
    borderColor: '#F5DD61',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  trabalhadores: {
    marginTop: 10,
    color: '#F5DD61',
    fontWeight: 'bold',
  },
});
