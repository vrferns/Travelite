
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

const CustScreen1 = ({navigation}) => {
  const [selected, setSelected] = useState(null);
  const COLORS = {primary: '#282D31', white: '#fff'};

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      <View>
        <TouchableOpacity  onPress={()=>navigation.replace('home')} >
          <MaterialIcons name="close" size={22} color="#fff" />
        </TouchableOpacity>

      </View>

      <ScrollView>
        <Text style={styles.title1}>CUSTOMIZATION</Text>
        <Text style={styles.title}>What matters more to you?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={[styles.option, selected === "experience" && styles.selected]} onPress={() => setSelected("experience")}>
            <Text style={styles.optionText}>🔆</Text>
            <Text style={styles.optionText}>Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, selected === "comfort" && styles.selected]}  onPress={() => setSelected("comfort")}>
            <Text style={styles.optionText}>👑</Text>
            <Text style={styles.optionText}>Comfort</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <TouchableOpacity style={[styles.nextButton]} onPress={()=>navigation.replace('CustScreen2')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#282D31',
    padding: 20,
    paddingTop:60,
    justifyContent:"center",
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:50,
  },
  title1: {
    marginTop:80,
    color:"white",

  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
    marginTop:50,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  option: {
    flex: 1,
    backgroundColor: "#3e4246",
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
    marginBottom: 30,
    alignItems: "center",
  },
  nextText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustScreen1;
