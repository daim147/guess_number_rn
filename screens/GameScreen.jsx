import React, { useState, useRef, useEffect } from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude)=>{
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(rndNum === exclude){
       return generateRandomNumber(min,max,exclude)
    }else{
        return rndNum
    }
}
const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    
    const lower = useRef(1)
    const greater = useRef(100)
    const {gameOverHandler, userChoice} = props
    useEffect(()=>{
     if(currentGuess === userChoice){
        gameOverHandler(rounds)
     }   
    }, [gameOverHandler, userChoice, currentGuess])
    
    const nextGuesHandler = direction=>{
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Dont\'t lie', 'You know that this is wrong...', [{text:'Sorry!', style: 'cancel'}])
            return
        }
        if(direction === 'lower'){
            greater.current = currentGuess
        }else{
            lower.current = currentGuess
        }
        const nextGuess  = generateRandomNumber(lower.current, greater.current, currentGuess)
        setCurrentGuess(nextGuess)
        setRounds((r)=>r+1)
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuesHandler.bind(this, 'lower')}/>
                <Button title='GREATER' onPress={nextGuesHandler.bind(this, 'greater')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems:'center',
    }
    ,
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
})
export default GameScreen
