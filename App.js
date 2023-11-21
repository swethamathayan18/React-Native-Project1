import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from './GoalInput';
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  }

  function deleteItem(index) {
    const newGoals = goals.filter((el, i) => i !== index);
    setGoals(newGoals);
  }

  function openModalHandler() {
    setIsModalOpen(true);
  }
  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Button title="Add new Goal" color="#A070D6" onPress={openModalHandler} />
        <GoalInput onClose={closeModalHandler} visible={isModalOpen} addGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem text={itemData.item} onDelete={() => deleteItem(itemData.index)} />
            )}
          />
        </View>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"#1A0037"
  },
  goalsContainer: {
    flex: 4,
  },
});

