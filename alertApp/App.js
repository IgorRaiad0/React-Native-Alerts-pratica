import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button,} from 'react-native';

export default function App() {

  const abrirAlerta = () =>{
    Alert.alert( 'Olá, alerta com um botão')
  }

  const abrirAlertaComDoisBotoes = () => {
    Alert.alert(
    'Olá!','Alerta com dois botões',
    [{text: 'Ok', onPress: () => console.log("Ok")},
    {text: 'Cancelar', onPress: () => console.log("Cancelar"),},],
    { cancelable: true });
}

const abrirAlertaComTresBotoes = () =>{
   Alert.alert(
    'Este é o alerta com 3 botões','Escolha uma das opções:',
    [{text: 'Pergunte-me depois', onPress: ()=> console.log("Pergunte-me depois")},
     {text: 'sim', onPress: ()=> console.log("Sim")},
     {text: 'Não', onPress: ()=> console.log("Não")}],
     {cancelable: false});
}

const randomBtns =() => {
  const botoes = [abrirAlerta, abrirAlertaComDoisBotoes, abrirAlertaComTresBotoes];
  const escolha = Math.floor(Math.random() * botoes.length)
  return botoes[escolha]();
}
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />

      <Button title='Botão simples' onPress={abrirAlerta} style={styles.btnSimples}/>

      <Button title='2 botões' onPress={abrirAlertaComDoisBotoes}/>

      <Button title='3 botões' onPress={abrirAlertaComTresBotoes}/>

      <View style={styles.desafio}>
        <Text>PARTE DO DESAFIO</Text>

        <Button title='Radom btn' onPress={randomBtns}/>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnSimples: {
    backgroundColor: 'red',
  },

  desafio:{
    backgroundColor: 'yellow',
    padding: 100,
    borderRadius: 10,
    marginTop: 10,
    gap: 30,
  },
});
