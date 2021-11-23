import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style = {{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.26,
        shadowRadius:6,
        elevation:5,
        padding: '3%',
        borderRadius:10,
    }
})

export default Card
