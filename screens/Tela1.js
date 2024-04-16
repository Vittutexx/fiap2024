import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import image from '../assets/adaptive-icon.png'

export default function Tela1({navigation}) {
    return (
      <ScrollView style={styles.container}>
        <Image source={image} style={styles.image}/>
        <Text>
          Culpa ea elit consequat quis magna qui qui mollit anim consectetur qui. Et duis sit mollit aliquip incididunt ut enim qui laboris excepteur fugiat. Commodo sit non labore ut. Incididunt deserunt adipisicing aliqua irure culpa nostrud consectetur quis. Ullamco incididunt eiusmod aute dolor nulla.Deserunt nostrud sit laborum ex nostrud anim nisi in ut excepteur sunt. Labore eiusmod mollit laborum incididunt consequat ea velit. Consequat voluptate exercitation quis fugiat pariatur fugiat minim veniam adipisicing nulla consequat. Reprehenderit magna ea ipsum aliqua eu commodo. Aliqua laboris culpa incididunt voluptate esse ad anim voluptate sint aute laborum cillum.Do consectetur consectetur proident amet dolore ullamco qui sint labore. Est velit aliquip cupidatat esse enim est incididunt magna occaecat ut sint occaecat in duis. Ea voluptate consequat aliquip magna. Lorem Lorem eu non aliqua ea ea dolor cupidatat veniam culpa quiEst do consequat excepteur magna nostrud ad ex eiusmod aliqua labore aliqua. Ex cillum adipisicing labore labore aliquip. Sint do tempor esse fugiat consequat ex labore quis consequat est cupidatat aute non magna. Eiusmod cillum adipisicing Lorem tempor officia adipisicing proident occaecat. Do eu consequat aliquip incididunt mollit exercitation nisi velit voluptate. Id ut magna velit laboris aute. Nulla proident incididunt nulla et pariatur laboris.
        </Text>
        <Button
        title='Clique aqui para Tela 2'
        onPress={()=> navigation.navigate('Tela2')} />
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
    image: {
        width: 200,
        height: 200,
    }
  });
  