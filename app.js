import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase:'frase',
      img: require('./src/biscoito.png'),
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      'Doi né? O que?  deitar no sofá e lembrar que esqueceu o controle.',
      'Doi né? O que? deitar no sofá e lembrar que esqueceu o controle.',
      'Apito + Guigui e Stefany = combinaçao do capeta.',
      'Determinadas situações não são engraçadas, são dignas de pena!',
      'As mentiras são engraçadas! São pronunciadas com sinceridades falsas.'

    ];


  }

  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() *this.frases.length);

    this.setState({
      textoFrase:'"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){  
    return(
        <View style = {styles.container}>

          <Image
            source={this.state.img}
            style={styles.img}
            />

    <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

            <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
            </TouchableOpacity>

          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  img:{
    width:250,
    height:250,   
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
},
  botao:{
    width: 230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius: 25
},
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22'
  }

});

export default App;
