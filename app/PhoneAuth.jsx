import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function ConfirmNumberScreen({navigation}) {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeButton}>
        <MaterialIcons name="close" size={22} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Confirm your number</Text>
      <Text style={styles.subtitle}>Enter the code we sent over to 09196252422.</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => (inputs.current[index] = el)}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleChange(text, index)}
            value={digit}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('RestPass')}>
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
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    backgroundColor: '#3e4246',
    color: '#fff',
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    width: 60,
    height: 60,
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
