import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function ResetPasswordScreen({navigation}) {
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const isValid = password.length >= 6; // Example validation

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeButton}>
        <MaterialIcons name="close" size={22} color="#fff" />
      </TouchableOpacity>

    
      <View style={styles.avatarContainer}>
        <Image
          source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')}  // Replace with actual image if available
          style={styles.avatar}
        />
        <Text style={styles.username}>Jordan</Text>
      </View>

      
      <Text style={styles.title}>Reset password</Text>

      
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secure}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <MaterialIcons
            name={secure ? 'visibility-off' : 'visibility'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
        {isValid && (
          <MaterialIcons name="check-circle" size={20} color="#00d26a" style={styles.checkIcon} />
        )}
      </View>

    
      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('Signup')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#333',
    marginBottom: 5,
  },
  username: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#3e4246',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 30,
    height: 60,
    position: 'relative',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
  },
  checkIcon: {
    marginLeft: 10,
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
});
