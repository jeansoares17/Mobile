import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: ''
    }
  }

mudouMensagem = msg => {
  this.setState({mensagem:msg})
}

  render() { 
    return (
      <View style={styles.container}>
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
        <StatusBar style="auto" />
      </View>
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
  }
});
