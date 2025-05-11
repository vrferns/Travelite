import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  StatusBar,
  ImageCard
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ExploreScreen({navigation}) {
  const categories = [
    { icon: 'bed-outline', label: 'Hotels' },
    { icon: 'pricetag-outline', label: 'Things to do' },
    { icon: 'restaurant-outline', label: 'Food' },
    { icon: 'bed-outline', label: 'Hotels' },
    { icon: 'pricetag-outline', label: 'Things to do' },
    { icon: 'restaurant-outline', label: 'Food' },
  ];

  const events = [
    {
      id: '1',
      title: 'NIGHT RAVE',
      location: 'Vagator, North Goa',
      tag: 'Hot',
      image: require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/vagator.png'),
    },
    {
      id: '2',
      title: 'NIGHT RAVE',
      location: 'Vagator, North Goa',
      tag: 'Hot',
      image: require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/vagator.png'),
    }, 
    {
      id: '3',
      title: 'NIGHT RAVE',
      location: 'Vagator, North Goa',
      tag: 'Hot',
      image: require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/vagator.png'),
    },
  ];

  const COLORS = {primary: '#282D31', white: '#fff'};

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={COLORS.primary}/>
        
        <View style={styles.header}>
          <View>
            <Image
              source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/logoTrav.png')}  
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.replace('reminder')}>
            <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.avatar} />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>


        <Text style={styles.exploreTitle}>Explore</Text>

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((cat, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Ionicons name={cat.icon} size={20} color="#fff" />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      
        <FlatList 
          data={events}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.replace('HomeCards')}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardTag}>
                  <Text style={styles.cardTagText}>{item.tag}</Text>
                </View>
                <View style={styles.cardTextWrapper}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubtitle}>{item.location}</Text>
                  <Text style={styles.cardPrice}>Giveaway</Text>
                </View>
              </View>

            </TouchableOpacity>
          
          )}
        />

     
        <Text style={styles.sectionTitle}>Small Batch stays</Text>
        <Text style={styles.sectionSubtitle}>
          Don’t miss important clients like check-in activity & events
        </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardRow}>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/hotel1.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/hotel1.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/hotel1.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/hotel1.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/hotel1.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/hotel1.png')} style={styles.imageCard}/>
        </ScrollView>
      

        
        <Text style={styles.sectionTitle}>Plan your next escape</Text>
        <Text style={styles.sectionSubtitle}>
          Don’t miss important clients like check-in activity & events
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardRow}>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.imageCard}/>
          <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')} style={styles.imageCard}/>
        </ScrollView>

      </ScrollView>
      

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
    backgroundColor: '#282D31',
    paddingTop: 60,
    paddingHorizontal: 5,
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
  },
  notificationDot: {
    width: 10,
    height: 10,
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#181818',
  },
  exploreTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  categories: {
    flexGrow: 0,
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryLabel: {
    color: '#fff',
    marginLeft: 8,
  },
  card: {
    width: width * 0.6,
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#333',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF4444',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardTagText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardTextWrapper: {
    padding: 10,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardSubtitle: {
    color: '#bbb',
    fontSize: 12,
    marginVertical: 4,
  },
  cardPrice: {
    color: '#00cc66',
    fontWeight: '600',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 25,
  },
  sectionSubtitle: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 5,
  },
   cardRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  imageCard: {
    width: 140,
    height: 120,
    borderRadius: 15,
    marginRight: 15,
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
