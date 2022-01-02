import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import succes from '../assets/success.png'
const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
        
            <Text>The Game is Over!</Text>
            <View style={styles.imageWrapper}>
            <Image fadeDuration={2000} style={styles.image} source={succes} />
            </View>
            <Text>Number of Rounds: {props.rounds}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title='Restart Game' onPress={props.configureNewGameHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        marginTop:100,
        alignItems: 'center',
    },
    image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    imageWrapper:{
        width: 300,
        height: 300,
        overflow: 'hidden',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        marginVertical: 10,
    }
})
export default GameOverScreen
