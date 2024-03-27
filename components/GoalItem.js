import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, deleteGoalHandler }) => {
  return (
    <Pressable
      onPress={deleteGoalHandler.bind(this, item.id)}
      android_ripple={{ color: "#950cf0" }}
      onHoverIn={{ color: "#ee5353" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalsText}>
        <Text style={{ color: "white" }}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
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
  pressedItem: {
    backgroundColor: "#97b2e4",
    borderRadius: 10,
  },
});
