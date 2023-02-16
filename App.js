import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Image, ImageBackground, TouchableOpacity, Switch, ActivityIndicator, ScrolView} from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: '',
      isEnabled: false
    }
  }

mudouMensagem = msg => {
  this.setState({mensagem:msg})
}

  render() { 
    return (
      
      <ImageBackground 
      source= {{uri: 'https://www.futbox.com/img/v1/5b1/ecb/e69/e45/09b75491e5ae71f116e9.png'}}
      style={styles.container}>
        {Platform.OS === 'android' ? (<Text>Android</Text>) : (<Text style={styles.text}>iOS</Text>)}
        <Text style={styles.text}>Fiap</Text>
        <Text style={[styles.text, styles.textColor]}>portal do aluno</Text>
        <TextInput
        placeholder='login'
        style={styles.textInput}
        onChangeText={this.mudouMensagem}
        />
        <TextInput
        placeholder='senha'
        style={styles.textInput}
        onChangeText={this.mudouMensagem}/>

        <Image
          source={{uri: 'https://images6.alphacoders.com/473/thumbbig-473784.webp'}}
        style={styles.image}
        resizeMode = "center"
        />
        <TouchableOpacity onPress={()=> alert("Esqueci minha senha")}>
          <Text>Esqueci minha senha </Text>
          
        
        </TouchableOpacity>
        <Switch
          value = {this.state.isEnabled}
          onValueChange ={()=>this.setState({isEnabled: !this.state.isEnabled})}
          thumbColor ='#000'
          trackColor={{false: '#d3d3d3', true:'#000'}}
        />
        {this.state.isEnabled ?( <ActivityIndicator
          color='red'
        />): <></>}
       
      <View />
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'green'
      }
    })
  },
  textColor:{
    color: 'grey'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: 200,
  },
  image: {
    width: 100,
    height: 100
  },

});