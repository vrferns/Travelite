import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar,Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function PlanTripScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={COLORS.primary} />
       
        <View style={styles.headerRow}>
          <Text style={styles.badge}>PLANLITE</Text>
          <View style={styles.avatar} >
              <Image
                        source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} 
                        style={styles.avatar}
              />
          </View>
        </View>

        <Text style={styles.title}>Plan your next{"\n"}epic trip</Text>

        
        <View style={styles.timeline}>
          
          <View style={styles.step}>
            <Ionicons name="location-outline" size={20} color="#fff" style={styles.icon} />
            <View style={styles.stepText}>
              <Text style={styles.stepLabel}>Step 1</Text>
              <Text style={styles.stepHeading}>Where</Text>
              <Text style={styles.stepDescription}>We'll help you pick a great place to host an adventure.</Text>
            </View>
          </View>

          
          <View style={styles.step}>
            <MaterialIcons name="date-range" size={20} color="#fff" style={styles.icon} />
            <View style={styles.stepText}>
              <Text style={styles.stepLabel}>Step 2</Text>
              <Text style={styles.stepHeading}>When</Text>
              <Text style={styles.stepDescription}>Tell us how long you & your homies want this vacay to be & we’ll handle the rest.</Text>
            </View>
          </View>

          
          <View style={styles.step}>
            <FontAwesome5 name="user-friends" size={20} color="#fff" style={styles.icon} />
            <View style={styles.stepText}>
              <Text style={styles.stepLabel}>Step 3</Text>
              <Text style={styles.stepHeading}>Who</Text>
              <Text style={styles.stepDescription}>Who are you bringing along? Tell us & we’ll make it happen.</Text>
            </View>
          </View>
        </View>


      </ScrollView>
      
      
      <TouchableOpacity style={styles.planButton} onPress={()=>navigation.replace('plan2')}>
        <Text style={styles.planButtonText}>Plan your Trip</Text>
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
    padding: 24,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  badge: {
    backgroundColor: '#ff7a00',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 20,
    margin:20,
  },
  timeline: {
    flex: 1,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  icon: {
    marginRight: 12,
    marginTop: 6,
  },
  navItemIcon: {
    margin:15 ,
    marginBottom:2,
    marginTop: 9,
  },
  stepText: {
    flex: 1,
  },
  stepLabel: {
    color: '#00aaff',
    fontSize: 14,
    fontWeight: '600',
  },
  stepHeading: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  stepDescription: {
    color: '#aaa',
    fontSize: 13,
  },
  planButton: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginVertical: 20,
  },
  planButtonText: {
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
