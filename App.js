import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//imagens importadas
import imageDjavan from "./assets/foto-djavan.jpg";
import imageElis from "./assets/elis-regina.jpg";
import ImageAdoniran from "./assets/adoniran-barbosa.jpg";
import ImageChico from "./assets/chico-buarque.jpg";
import ImageTim from "./assets/tim-maia.jpg";
import ImageRita from "./assets/rita-lee.jpg";

export default function App() {
  const [musicaAtual, setMusicaAtual] = useState(musicaAleatoria());

  //Criando a function musicaAleatoria
  function musicaAleatoria() {
    let arrArtistas = [
      { nome: "Adoniran Barbosa", musica: "Trem das onze", image: ImageAdoniran, backgroundColor: 'darkblue'},
      { nome: "Chico Buarque", musica: "Apesar de Você", image: ImageChico, backgroundColor: 'green'},
      { nome: "Tim Maia", musica: "Eu Amo Você", image: ImageTim, backgroundColor: 'orange' },
      { nome: "Rita Lee", musica: "Lança Perfume", image: ImageRita, backgroundColor:  'lightgray'},
      { nome: "Elis Regina ft. Adoniran Barbosa", musica: "Tiro ao Álvaro", image: imageElis, backgroundColor: 'gray' },
      { nome: "Djavan", musica: "Flor de Lis", image: imageDjavan, backgroundColor: 'purple'}
    ];

    let random = Math.floor(Math.random() * arrArtistas.length);
    return arrArtistas[random];
  }


  // Função para mudar para a próxima música
  function proximaMusica() {
    const novaMusica = musicaAleatoria();
    setMusicaAtual(novaMusica);
  }

  return (
    
    <View style={[styles.container, {backgroundColor: musicaAtual.backgroundColor}]}>
      <Text style={styles.minhasMusicas}>Minhas Músicas do Momento</Text>
      <Image style={styles.image} source={musicaAtual.image}/>
      <Text style={styles.nomeMusica}>{musicaAtual.musica}</Text>
      <Text style={styles.nomeArtista}>{musicaAtual.nome}</Text>
      <TouchableOpacity onPress={proximaMusica}>
        <FontAwesome  style={styles.proximo} name="random" size={30}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nomeArtista: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    fontFamily: 'Arial',
    flexDirection: 'row',
    color: 'white',
    fontSize: 14,
  },
  nomeMusica: {
    marginLeft: 15,
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    flexDirection: 'row',
    color: 'white',
    fontSize: 24,
  },
  image: {
    width: 380,
    height: 380,
    marginBottom: 40,
    marginLeft: 15,
    alignSelf: 'flex-start',
    borderRadius: 6,
  },
  proximo: {
    marginTop: 30,
    color: 'white',
    alignSelf: 'flex-end',
    paddingLeft: 320
  },
  minhasMusicas: {
    marginBottom: 5,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 21,
  }
});
