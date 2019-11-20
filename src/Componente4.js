import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
export default class Componente4 extends React.Component {
     static navigationOptions = {
        title: 'sobre o time'
    };
    render() {
      return (
          <View style={{    flex: 1,    alignItems:'center',    justifyContent:'center'   }}>
          <Image style={styles.imagem} source={require('../assets/Time.jpeg')} />
           <Text style={styles.paragraph}>
         Este time é composto por Andrelino Faria e Igor Pessoni
         Vamos terminar o ano.
        </Text>
            
           </View>
     );
   }
}
const styles = StyleSheet.create({
  imagem: {
    height: 200,
    width: 300,
  }
});