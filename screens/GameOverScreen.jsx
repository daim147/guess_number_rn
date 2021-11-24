import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Ovew!</Text>
            <Text>Number of Rounds: {props.rounds}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title='Restart Game' onPress={props.configureNewGameHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        // justifyContent: 'center',
        marginTop:100,
        alignItems: 'center',
    }
})
export default GameOverScreen
