import React from 'react';
import { Button, View, Text } from 'react-native';
export default class Componente1 extends React.Component {
     static navigationOptions = {
        title: 'menu principal'
    };
    render() {
      return (
          <View style={{    flex: 1,    alignItems:'center',    justifyContent:'center'   }}>
             <Button title="Sobre a unifacef"
             onPress={() => this.props.navigation.navigate('Componente2')}    />
              <Button title="Sobre o curso"
             onPress={() => this.props.navigation.navigate('Componente3')}    />
              <Button title="sobre o time"
             onPress={() => this.props.navigation.navigate('Componente4')}    />
           </View>
     );
   }
}