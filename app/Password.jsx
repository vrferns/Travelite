import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image , StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function LoginScreen({navigation}) {
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      <TouchableOpacity style={styles.closeButton}>
              <MaterialIcons name="close" size={22} color="#fff" />
            </TouchableOpacity>
      <TouchableOpacity style={styles.avatarContainer}>
        <Image
          source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')}  
          style={styles.avatar}
        />
        <Text style={styles.username}>Jordan</Text>
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Welcome back!</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <MaterialIcons
            name={secureText ? 'visibility-off' : 'visibility'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('EmailAuth')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot your password? <Text style={styles.resetText}>Reset it</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
    backgroundColor: '#333', // Placeholder background
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#3e4246',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 40,
    height: 60,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#ff7a00',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotText: {
    color: '#aaa',
    fontSize: 14,
  },
  resetText: {
    color: '#fff',
    fontWeight: '500',
  },
});
