import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function NotificationsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary}/>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.replace('home')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.avatar}>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.avatarImage} />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.subtitle}>WHAT YOU'VE MISSED</Text>
      <Text style={styles.title}>Notifications</Text>

      {/* Notifications */}
      <ScrollView style={styles.notificationsContainer}>
        <NotificationItem
          image={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')}
          title="Do you already know the Old Cruise?"
          subtitle="Check our Cruise packages under Rs 499 only"
        />
        <NotificationItem
          image={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')}
          title="Book your seat at Mini Japan Restaurant"
          subtitle="Book your table to experience Japanese culture in Goa"
        />
        <NotificationItem
          icon="call-outline"
          bgColor="#FF6B00"
          title="Add your phone number"
          subtitle="Add a phone number so you get alerts when you’re on the app"
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
                <TouchableOpacity onPress={()=>navigation.replace('remindeer')}>
                  <Ionicons name="compass-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.replace('CustScreen1')}>
                  <Ionicons name="calendar-outline" size={24} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.replace('plan1')}>
                  <Ionicons name="person-outline" size={24} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.replace('home')}>
                  <Ionicons name="home" size={24} color="#888" />
                </TouchableOpacity>
        
      </View>
    </View>
  );
}

function NotificationItem({ image, icon, title, subtitle, bgColor = '#222' }) {
  return (
    <View style={[styles.notificationItem, { backgroundColor: bgColor }]}>
      {image ? (
        <Image source={image} style={styles.notificationImage} />
      ) : (
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={24} color="#fff" />
        </View>
      )}
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    color: '#888',
    fontSize: 12,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FF6B00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationSubtitle: {
    color: '#ccc',
    fontSize: 12,
  },
  navbar: {
    
    flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 15,
      margin:25,
      marginTop:0,
      marginBottom:40,
      borderTopWidth: 1,
      borderColor: '#222',
      backgroundColor: '#1c1c1c',
      borderRadius: 50,
  },
});
