
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from "react-native";

const COLORS = {primary: '#282D31', white: '#fff'};
const interests = [
  { id: 1, label: "🏊‍♂️\nDiving" },
  { id: 2, label: "⛷️\nSkiing" },
  { id: 3, label: "🏃‍♂️\nRunning" },
  { id: 4, label: "🥾\nHiking" },
  { id: 5, label: "🏄‍♂️\nSurfing" },
  { id: 6, label: "🚴‍♂️\nCycling" },
];

const CustomizationScreen = ({navigation}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary}/>
        <Text style={styles.title1}>CUSTOMIZATION</Text>
      <Text style={styles.title}>What are your Interests?</Text>
      <View style={styles.optionsContainer}>
        {interests.map((interest) => (
          <TouchableOpacity
            key={interest.id}
            style={[styles.option, selectedInterests.includes(interest.id) && styles.selected]}
            onPress={() => toggleInterest(interest.id)}
          >
            <Text style={styles.optionText}>{interest.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.replace('CustScreen3')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 20,
    justifyContent: "center",
  },
  title1: {
   
    color:"white",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
    marginTop:40,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  option: {
    marginTop:10,
    backgroundColor: "#2a2a2a",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    margin: 10,
  },
  selected: {
    borderColor: "#ff9500",
    backgroundColor: "#ffffff20",
  },
  optionText: {
    
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#ff9500",
    padding: 15,
    borderRadius: 50,
    marginTop: 120,
    alignItems: "center",
  },
  nextText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomizationScreen;
