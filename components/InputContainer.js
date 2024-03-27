import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const InputContainer = ({
  goal,
  openModal,
  goalInputHandler,
  addGoalHandler,
  modal,
}) => {
  return (
    <Modal visible={modal} animationType="slide" style={{}}>
      <SafeAreaView style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          textContentType="familyName"
          onChangeText={goalInputHandler}
        />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ ...styles.button }}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              disabled={!goal}
              color={"#6918b9"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={openModal} color={"#f3203c"} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  button: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 25,
    position: "absolute",
    backfaceVisibility: "visible",
    backgroundColor: "#311b6d",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#f5ecec8f",
    height: 55,
    padding: 10,
    margin: "auto",
    borderRadius: 5,
    backgroundColor: "white",
    width: 350,
  },
});
