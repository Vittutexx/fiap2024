import React, { useState } from 'react';
import {StatusBar, Text, View, Modal, TouchableOpacity} from 'react-native';





export default function App(){
const [modalVisible, setModalVisible] = useState(false)
  return (
      <View>
        <Modal
        animationType='slide'
        transparent = {true}
        visible = {modalVisible}
        onRequestClose={() => {setModalVisible(modalVisible)}}>
            <View style = {[style.container, {backgroundColor: 'lightseagreen'}]}>
                <Text>Exemplo de Modal</Text>
                  <TouchableOpacity>
                  onPress = {() => setModalVisible(false)}
                    <Text>Fechar</Text>
                  </TouchableOpacity>
            </View>
        </Modal>
        <TouchableOpacity>
        onPress = {() =>setModalVisible(true)}
          <Text>Clique para abrir o modal</Text>
        </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
        );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  