import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,StatusBar} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function SignupScreen({navigation}) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [secure, setSecure] = useState(true);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeButton}>
        <MaterialIcons name="close" size={22} color="#fff" />
      </TouchableOpacity>

     
      <Text style={styles.signupText}>SIGNUP</Text>
      <Text style={styles.title}>Enter your details</Text>

     
      <TextInput
        style={styles.input}
        placeholder="First name"
        placeholderTextColor="#aaa"
        value={form.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor="#aaa"
        value={form.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <Text style={styles.helperText}>Make sure it matches the name on your government ID.</Text>

      
      <View style={styles.iconInputContainer}>
        <MaterialIcons name="person" size={20} color="#aaa" />
        <TextInput
          style={styles.iconInput}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
        />
        <MaterialIcons name="check-circle-outline" size={20} color="#aaa" />
      </View>

     
      <View style={styles.iconInputContainer}>
        <MaterialIcons name="lock-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.iconInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secure}
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <MaterialIcons
            name={secure ? 'visibility-off' : 'visibility'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.helperText}>Make sure your password is strong.</Text>

      
      <Text style={styles.termsText}>
        By clicking <Text style={{ fontWeight: 'bold' }}>“Agree and continue”</Text>, I agree to Cross’s Terms of
        Service and acknowledge the Privacy Policy.
      </Text>

      
      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('Terms')}>
        <Text style={styles.buttonText}>Agree and continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
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
  signupText: {
    color: '#aaa',
    fontSize: 12,
    marginTop:10,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#3e4246',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 2,
    height: 50,
  },
  iconInputContainer: {
    backgroundColor: '#3e4246',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
  },
  iconInput: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
  },
  helperText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  termsText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
