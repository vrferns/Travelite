import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function TermsOfServiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary}/>
     <ScrollView>
      <View style={styles.header}>
        <Image
                  source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/logoTrav.png')}  // Replace with avatar URL
                  style={styles.avatar}
                />
      </View>

      
      <Text style={styles.sectionLabel}>TERMS OF SERVICE</Text>

      
      <Text style={styles.heading}>Travelite is a community where anyone can belong</Text>

      
      <Text style={styles.body}>
        To ensure this, we are asking you to commit to the following:
      </Text>
      <Text style={styles.commitment}>
        I agree to treat everyone in the Travelite community – regardless of their race, gender, religion, national origin, or ability – with respect & without judgement or bias.
      </Text>
      </ScrollView>

     
      <TouchableOpacity style={styles.primaryButton} onPress={()=>navigation.replace('Notify')}>
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Decline</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop:40,
    marginBottom: 20,
  },
  
  sectionLabel: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 8,
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 15,
  },
  body: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 15,
  },
  commitment: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom:40,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
