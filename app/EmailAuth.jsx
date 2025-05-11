import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function VerificationScreen({navigation}) {
  const [pin, setPin] = useState('');
  const [secure, setSecure] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeButton}>
        <MaterialIcons name="close" size={22} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.header}>Enter the 6 digit code</Text>
      <Text style={styles.subText}>
        Enter the code we sent over to <Text style={{ fontWeight: '600' }}>21co03@aitdgoa.edu.in</Text>
      </Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="PIN"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          secureTextEntry={secure}
          maxLength={6}
          value={pin}
          onChangeText={setPin}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <MaterialIcons
            name={secure ? 'visibility-off' : 'visibility'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('PhoneAuth')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't receive a code? <Text style={styles.resendLink}>Resend it</Text>
        </Text>
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
  header: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'left',
  },
  subText: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 30,
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
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
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
  resendText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
  resendLink: {
    color: '#fff',
    fontWeight: '500',
  },
});
