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
  SafeAreaView,
} from "react-native";
import GoalItem from "./components/GoalItem";
import InputContainer from "./components/InputContainer";

export default function App() {
  const [goal, setGoal] = useState("");
  const [enteredGoals, setEnteredGoals] = useState([]);
  const [modalVisible, setModal] = useState(false);
  function goalInputHandler(text) {
    setGoal(text);
  }
  function addGoalHandler() {
    setEnteredGoals([
      ...enteredGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    setModal(false);
  }
  function openModal() {
    setModal(!modalVisible);
  }
  function deleteGoalHandler(id) {
    console.log("delete");
    setEnteredGoals((enteredGoals) => {
      return enteredGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <Button title="Add new Goal" color={"#e08ce7"} onPress={openModal} />
      {modalVisible && (
        <InputContainer
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          modal={modalVisible}
          openModal={openModal}
          goal={goal}
        />
      )}
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
              <GoalItem
                item={item.item}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
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
