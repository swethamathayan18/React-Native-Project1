import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        onPress={props.onDelete} 
        // android_ripple={{color:"210466"}}
        style={({pressed}) => pressed && styles.goalpressed}
        >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginTop:15,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    margin: 8,
    padding: 5,
  },
  goalpressed:{
    opacity:0.5
  }
});

module.exports = GoalItem;
