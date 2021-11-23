import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import color from "../constants/color";
const NumberContainer = (props) => {
  return <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
  </View>;
};
const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: color.primary,
        padding: 10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color: color.primary,
        fontSize:22,
    }
});
export default NumberContainer;
