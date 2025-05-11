import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons, Feather } from '@expo/vector-icons';

export default function AddCardScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
   const [secureText, setSecureText] = useState(true);
  const COLORS = {primary: '#282D31', white: '#fff'};


  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary}/>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.paymentLabel}>PAYMENT</Text>
        <TouchableOpacity onPress={()=>navigation.replace('home')}>
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Add a card</Text>

      {/* Card Number */}
      <View style={styles.cardInput}>
        <MaterialCommunityIcons name="credit-card" size={24} color="#FF5A5F" />
         <TextInput
          style={[styles.cardNumber, { flex: 1 }]}
          placeholder="card number"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          
        />
        <Feather name="check-circle" size={20} color="#4CAF50" />
      </View>

      {/* CVV and Expiry */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 10 }]}
          placeholder="CVV"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Expiry"
          placeholderTextColor="#aaa"
          
        />
      </View>

      {/* Password */}
      <View style={styles.passwordContainer}>
        <MaterialIcons name="lock-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secureText}
          value={showPassword}
          onChangeText={setShowPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <MaterialIcons
            name={secureText ? 'visibility-off' : 'visibility'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('ConfirmPay')}>
        <Text style={styles.buttonText}>Add this Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282D31',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentLabel: {
    color: '#aaa',
    fontSize: 15,
    letterSpacing: 1,
    marginTop:40,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginVertical: 50,
  },
  cardInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e4246',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#3e4246',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 16,
  },
  passwordContainer: {
     backgroundColor: '#3e4246',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 40,
    marginTop:20,
    height: 60,
  },
  passwordInput:{
    flex: 1,
    marginLeft: 10,
    color: '#fff',

  },
  button: {
    backgroundColor: '#FF7A00',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
