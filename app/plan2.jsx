import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,StatusBar } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function WhereScreen({navigation}) {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} />
      
      <View style={styles.tabs}>
        <View style={[styles.tab, styles.tabActive]}>
          <Ionicons name="location-outline" size={18} color="#fff" />
        </View>
        <View style={styles.tab}>
          <MaterialIcons name="date-range" size={18} color="#999" />
        </View>
        <View style={styles.tab}>
          <FontAwesome5 name="user-friends" size={16} color="#999" />
        </View>
      </View>

      
      <Text style={styles.title}>Where do you{"\n"}want to go?</Text>

    
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={18} color="#ccc" />
        <TextInput
          placeholder="Search destination"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <Ionicons name="mic-outline" size={18} color="#aaa" />
      </View>

      
      <Image
        source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/map.png')} 
        style={styles.mapImage}
        resizeMode="contain"
      />

      
      <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.replace('plan3')}>
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
              <TouchableOpacity style={styles.navItem}>
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
    justifyContent: 'space-between',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e4246',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 10,
  },
  mapImage: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 40,
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
