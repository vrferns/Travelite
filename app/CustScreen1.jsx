
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from "react-native";

const CustScreen1 = ({navigation}) => {
  const [selected, setSelected] = useState(null);
  const COLORS = {primary: '#282D31', white: '#fff'};

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      <Text style={styles.title1}>CUSTOMIZATION</Text>
      <Text style={styles.title}>What matters more to you?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, selected === "experience" && styles.selected]}
          onPress={() => setSelected("experience")}
        >
          <Text style={styles.optionText}>🔆</Text>
          <Text style={styles.optionText}>Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, selected === "comfort" && styles.selected]}
          onPress={() => setSelected("comfort")}
        >
          <Text style={styles.optionText}>👑</Text>
          <Text style={styles.optionText}>Comfort</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.nextButton]} onPress={()=>navigation.replace('CustScreen2')}>
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
    justifyContent:"center",
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
    marginTop:100,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  option: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    paddingVertical: 80,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    marginTop:50,
  },
  selected: {
    borderColor: "#ff9500",
    backgroundColor: "2a2a2a",
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

export default CustScreen1;
