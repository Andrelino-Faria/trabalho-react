import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
export default class Componente3 extends React.Component {
     static navigationOptions = {
        title: 'sobre o curso'
    };
    render() {
      return (
          <View style={{    flex: 1,    alignItems:'center',    justifyContent:'center'   }}>
           <Image style={styles.imagem} source={require('../assets/depto.png')} />
           <Text style={styles.paragraph}>
         O Curso de Bacharelado em Sistemas de Informação (Computação) do Uni-FACEF possui como instrumentos no processo ensino-aprendizagem:
        </Text>
             
           </View>
     );
   }
}
const styles = StyleSheet.create({
  imagem: {
    height: 180,
    width: 300,
  }
});