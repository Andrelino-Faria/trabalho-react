import React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
export default class Componente2 extends React.Component {
     static navigationOptions = {
        title: 'sobre a unifacef'
    };
    render() {
      return (
          <View style={{    flex: 1,    alignItems:'center',    justifyContent:'center'   }}>
             <Image style={styles.imagem} source={require('../assets/logo_unifacef_login.png')} />
             <Text style={styles.paragraph}>
         Bem vindo a Uni-Facef
        </Text><Text style={styles.paragraph}>
         Unidade I
Av. Major Nicácio, 2433
Bairro São José
CEP 14401-135
 
 </Text><Text style={styles.paragraph}>
 Unidade II
Av. Dr. Ismael Alonso y Alonso, 2400
Bairro São José
CEP 14403-430
        </Text>

           </View>
           
     );
 
    
   }
   
   
}
const styles = StyleSheet.create({
  imagem: {
    height: 80,
    width: 300,
  }
});