
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

const CustomizationScreen = ({navigation}) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
       <TouchableOpacity style={styles.closeButton}>
        <MaterialIcons name="close" size={22} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Enter your college email</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={30} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="RegNo@college.edu.in"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.continueButton}  onPress={()=>navigation.replace('Password')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or continue with</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialoption}>
          <Image source={require("../assets/images/google.png")} style={styles.icon} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.socialoption}>
          <Image source={require("../assets/images/facebook.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialoption}>
          <Image source={require("../assets/images/apple.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.primary,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 40,
  },
  inputContainer: {
    backgroundColor: '#3e4246',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 20,
    height: 70,
  
  },
  input: {
    color: "white",
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#FF740F",
    padding: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  continueText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    color: "#888",
    fontSize: 14,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    gap: 2,
  },
  socialoption: {
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
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
  
  },
});

export default CustomizationScreen;
