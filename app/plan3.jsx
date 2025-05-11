import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
//import {Calendar} from 'react-native-calendars'
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function WhenScreen({navigation}) {
  const [selectedDate, setSelectedDate] = useState('2023-01-04');
  const [flexible, setFlexible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
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

        {/* calender */}
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

      </ScrollView>
        

      
      <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.replace('CustScreen1')} > 
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      
       <View style={styles.bottomNav}>
          <TouchableOpacity onPress={()=>navigation.replace('home')}>
            <Ionicons name="home" size={24} color="#fff" />
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>navigation.replace('reminder')}>
            <Ionicons name="compass-outline" size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.replace('CustScreen1')}>
           <Ionicons name="calendar-outline" size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.replace('plan1')}>
           <Ionicons name="person-outline" size={24} color="#888" />
          </TouchableOpacity>
              
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
    marginVertical:20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomNav: {
    
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
