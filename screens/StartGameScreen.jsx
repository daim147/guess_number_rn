import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import color from "../constants/color";

const StartGameScreen = () => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleValue = (value) => {
    setValue(value.replace(/[^0-9]/g, ""));
  };

  const resetValue = () => {
    setValue("");
    setConfirmed(false);
  };

  const confirmInput = () => {
    const choosesnNumber = parseInt(value);
    console.log(choosesnNumber, typeof choosesnNumber);
    if (isNaN(choosesnNumber) || choosesnNumber <= 0 || choosesnNumber > 99) {
      Alert.alert("Please input number type or between 0 and 99", "", [
        { text: "Okay", style: "destructive", onPress: resetValue },
      ]);

      return;
    }
    setConfirmed(true);
    setValue("");
    setSelectedNumber(choosesnNumber);
    Keyboard.dismiss()
  };
  let confirmedOutPut;
  if (confirmed) {
    confirmedOutPut = (
      <Card style = {styles.card}>
        <Text >You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='Start Game' color={color.primary}/>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            autoCapitalize="none"
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            value={value}
            onChangeText={handleValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetValue}
                color={color.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInput}
                color={color.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutPut}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    // backgroundColor:'red',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    // backgroundColor:'green',
  },
  button: {
    width: "45%",
  },
  input: {
    width: "50%",
    textAlign: "center",
    marginBottom: 10,
  },
  card:{
    marginTop:20,
    width: '60%',
    // justifyContent:'center'
    alignItems:'center'
  }
});

export default StartGameScreen;
