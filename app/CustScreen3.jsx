
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

const COLORS = {primary: '#282D31', white: '#fff'};

const budgets = [
  { id: 1, label: "₹ 5,000" },
  { id: 2, label: "₹ 10,000" },
  { id: 3, label: "₹ 20,000" },
  { id: 4, label: "₹ 30,000" },
  { id: 5, label: "₹ 40,000" },
  { id: 6, label: "₹ 50,000" },
];

const CustomizationScreen = ({navigation}) => {
  const [selectedBudget, setSelectedBudget] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      <View style={styles.header}>
        <TouchableOpacity  onPress={()=>navigation.replace('CustScreen2')}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={()=>navigation.replace('home')}>
          <MaterialIcons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
         
      <ScrollView>
        <Text style={styles.title1}>CUSTOMIZATION</Text>
        <Text style={styles.title}>What is your ideal trip budget?</Text>
        <View style={styles.optionsContainer}>
          {budgets.map((budget) => (
            <TouchableOpacity
              key={budget.id}
              style={[styles.option, selectedBudget === budget.id && styles.selected]}
              onPress={() => setSelectedBudget(budget.id)}
             >
              <Text style={styles.optionText}>{budget.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
     
      <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.replace('home')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
    paddingTop:40,
    justifyContent: "center",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title1: {
    marginTop:50,
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
    backgroundColor: "#3e4246",
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
    marginBottom:30,
    alignItems: "center",
  },
  nextText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomizationScreen;
