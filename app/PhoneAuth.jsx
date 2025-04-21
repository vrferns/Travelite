
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import Ionicon from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
const COLORS = {primary: '#282D31', white: '#fff'};
const PhoneAuth = ({navigation}) => {
  const code = ['4', '5', '2', '2'];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{right:150}}  onPress={()=>navigation.replace('Login')}>
        <FontAwesome.Button name="arrow-left" style={styles.icon}/>
      </TouchableOpacity>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary}/>
        
        <Text style={styles.title}>Confirm your number</Text>
        <Text style={styles.orText}>Enter the code we sent to you</Text>
        <View style={styles.inputContainer}>
          {code.map((digit, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.digit}>{digit}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.continueButton}  onPress={()=>navigation.replace('CustScreen1')}>
                <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>didn't recieve a code? Resend it</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.primary,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    padding: 10,
    margin: 10,
    
  },
  input: {
    color: "white",
    fontSize: 16,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '#3D4145',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: "#FF740F",
    padding: 15,
    borderRadius: 50,
    width: 250,
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
    textAlign:"left",
    //marginBottom: 10,
  },
 icon:{
  backgroundColor:COLORS.primary,
  height: 40,
  justifyContent: 'center',
  paddingHorizontal: 16,
 
},
icon2:{
  width: 30,
  height: 30,
  borderRadius: 50,
 
},
socialContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems:"center",
  gap: 2,
},
socialoption: {
  marginTop:10,
  backgroundColor: "#1c1c1c",
  paddingVertical: 15,
  paddingHorizontal: 30,
  borderRadius: 15,
  alignItems: "center",
  borderWidth: 2,
  borderColor: "transparent",
  margin: 10,
},

});

export default PhoneAuth;

