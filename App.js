import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuesRounds] =useState()
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
  
  return (
    <View style={styles.screen}>
      <Header title="Guess My Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});
