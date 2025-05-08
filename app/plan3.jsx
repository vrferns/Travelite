import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
//import {Calendar} from 'react-native-calendars'
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function WhenScreen() {
  const [selectedDate, setSelectedDate] = useState('2023-01-04');
  const [flexible, setFlexible] = useState(false);

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary} />
      
      <View style={styles.tabs}>
        <View style={styles.tab}>
          <Ionicons name="location-outline" size={18} color="#999" />
        </View>
        <View style={[styles.tab, styles.tabActive]}>
          <MaterialIcons name="date-range" size={18} color="#fff" />
        </View>
        <View style={styles.tab}>
          <FontAwesome5 name="user-friends" size={16} color="#999" />
        </View>
      </View>

      
      <Text style={styles.title}>When do you{"\n"}want to go?</Text>

      
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, !flexible && styles.activeToggle]}
          onPress={() => setFlexible(false)}
        >
          <Text style={[styles.toggleText, !flexible && styles.activeText]}>Choose dates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, flexible && styles.activeToggle]}
          onPress={() => setFlexible(true)}
        >
          <Text style={[styles.toggleText, flexible && styles.activeText]}>I'm flexible</Text>
        </TouchableOpacity>
      </View>

      
      {/* {!flexible && (
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#ff7a00',
              selectedTextColor: '#fff'
            }
          }}
          theme={{
            calendarBackground: '#2c2c2e',
            dayTextColor: '#fff',
            textSectionTitleColor: '#aaa',
            monthTextColor: '#fff',
            arrowColor: '#fff',
            selectedDayBackgroundColor: '#ff7a00',
            selectedDayTextColor: '#fff',
            todayTextColor: '#ff7a00',
          }}
          style={styles.calendar}
        />
      )} */}

      
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      
      <View style={styles.navBar}>
              <TouchableOpacity style={styles.navItem}>
                  <MaterialIcons style={styles.navItemIcon} name="explore" size={20} color="#aaa" />   
                  <Text style={styles.navItem}>Explore</Text>     
              </TouchableOpacity >
              <TouchableOpacity style={styles.navItem}>
                  <MaterialIcons style={styles.navItemIcon} name="search" size={20} color="#aaa" />   
                  <Text style={styles.navItem}>Search</Text>     
              </TouchableOpacity >
              <TouchableOpacity style={styles.navItemActive}>
                  <MaterialIcons style={styles.navItemIcon} name="send" size={20} color="#aaa" />   
                  <Text style={styles.navItem}>Plan</Text>     
              </TouchableOpacity >
              <TouchableOpacity style={styles.navItem}>
                  <MaterialIcons style={styles.navItemIcon} name="group" size={20} color="#aaa" />   
                  <Text style={styles.navItem}>Homies</Text>     
              </TouchableOpacity >
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'flex-start',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#3e4246',
    padding: 10,
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: '#007aff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    marginBottom: 20,
  },
  
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  toggleText: {
    color: '#aaa',
    fontSize: 14,
  },
  activeToggle: {
    backgroundColor: '#3a3a3c',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  calendar: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  navItemIcon: {
    margin:15 ,
    marginBottom:2,
    marginTop: 9,
  },
  navBar: {
    backgroundColor:'#3e4246',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 0,
    marginBottom:50,
    marginVertical:20,
    borderRadius: 50,
  },
  navItem: {
    color: '#888',
    fontSize: 15,
    marginBottom: 3,
  },
  navItemActive: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
  },
});
