import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [enteredGoals, setEnteredGoals] = useState([]);
  function goalInputHandler(text) {
    setGoal(text);
  }
  function addGoalHandler() {
    setEnteredGoals([
      ...enteredGoals,
      { text: goal, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          textContentType="familyName"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>
      <Text style={{ fontSize: 24 }}>List of Goals........</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={enteredGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={true}
          renderItem={(item) => {
            return (
              <View style={styles.goalsText}>
                <Text style={{ color: "white" }}>{item.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    padding: 10,
    gap: 20,

    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flex: 1,
    gap: 5,
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#d6c8c88f",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bdb4b48f",
    flex: 1,
    height: 45,
    padding: 10,
    margin: "auto",
    borderRadius: 5,
  },
  goalsContainer: {
    flex: 10,
  },
  goalsText: {
    padding: 15,
    fontSize: 18,
    backgroundColor: "#266ae9",
    width: "auto",
    textAlign: "left",
    borderRadius: 10,
    shadowRadius: 1,
    shadowColor: "black",
    elevation: 3,
    gap: 10,
    marginTop: 10,
  },
});
