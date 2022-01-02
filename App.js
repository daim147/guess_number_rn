import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
const fetchFont = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuesRounds] =useState()
  const [dataLoad ,setDataLoad] = useState(false)
  if(!dataLoad){
    return(
      <AppLoading startAsync={fetchFont} onFinish={()=>setDataLoad(true)} onError={(err)=>console.log(err)} />
    )
  }


  const configureNewGameHandler = ()=>{
    setGuesRounds(0)
    setUserNumber(null)

  }
  const startGameHandler = (selectedNumber)=>{
    setUserNumber(selectedNumber)
    setGuesRounds(0)
  }
  const gameOverHandler = numOfRound =>{
    setGuesRounds(numOfRound)
}
  let content = <StartGameScreen startGame={startGameHandler}/>
  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} />
  } else if (guessRounds > 0){
    content= <GameOverScreen rounds = {guessRounds } userNumber={userNumber} configureNewGameHandler={configureNewGameHandler}/>
  }
  let content= <GameOverScreen rounds = {1 } userNumber={1} configureNewGameHandler={configureNewGameHandler}/>

  
  return (
    <View style={styles.screen}>
      <Header title="Guess my Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});
