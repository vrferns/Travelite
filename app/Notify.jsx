import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function NotificationPromptScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} />
      
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      
      <Text style={styles.title}>Turn on notifications?</Text>

     
      <Text style={styles.subtitle}>
        Don’t miss important alerts like check-in activity & events.
      </Text>

     
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Yes, notify me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={()=>navigation.replace('home')}>
        <Text style={styles.secondaryButtonText}>Skip</Text>
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
  iconContainer: {
    backgroundColor: '#3e4246',
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  secondaryButton: {
    borderColor: '#3e4246',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 15,
  },
});
