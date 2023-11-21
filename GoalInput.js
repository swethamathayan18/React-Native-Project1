import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(text) {
    setGoalText(text);
  }
  function addGoalHandler() {
    props.addGoal(goalText);
    props.onClose();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImage}
          source={require("./assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.inputField}
          placeholder="type your goal"
        />
        <View style={styles.inputButtons}>
          <View style={styles.buttons}>
            <Button 
                color={"#f31282"} 
                title="Cancel" 
                onPress={props.onClose} />
          </View>
          <View style={styles.buttons}>
            <Button
              color={"#5e0acc"}
              onPress={addGoalHandler}
              title="Add Goal"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    backgroundColor: "#1A0037",
    flex: 1,
    padding: 16,
  },
  inputField: {
    padding: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  inputButtons: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
  goalImage: {
    width: 120,
    height: 120,
    margin: 20,
  },
});

module.exports = GoalInput;
