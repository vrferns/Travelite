import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  Image
} from 'react-native';
//import { ProgressBar } from 'react-native-paper';
import { Ionicons, Feather , FontAwesome, MaterialIcons} from '@expo/vector-icons';
 

const { width } = Dimensions.get('window');
const COLORS = {primary: '#282D31', white: '#fff'};

export default function ClubDetailScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={22} color="#fff" />
            </TouchableOpacity>
            
            <StatusBar backgroundColor={COLORS.primary}/>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconCircle}>
                <Ionicons name="call-outline" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconCircle}>
                <Feather name="edit" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconCircle}>
                <Ionicons name="share-social-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/vagator.png')} style={[styles.image, {width}]} /> 
            
            <Text style={styles.title}>Rudy’s Night{"\n"}Club & Bar</Text>

           
            <View style={styles.ratingRow}>
              <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
              <Text style={styles.reviewText}>6,000 reviews</Text>
            </View>

            <Text style={styles.rank}>Top #1 in 428 clubs in Goa</Text>

           
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.tagContainer}>
              <Tag label="Night Club" />
              <Tag label="Bar" />
              <Tag label="Mid range" />
              <Tag label="Rustic" />
            </View>

            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              vulputate enim metus ac. Lorem risus id eu accumsan, metus diam
              placerat sit amet. Sed malesuada vitae malesuada suspendisse feugiat
              feugiat eget. Semper in rhoncus metus.
            </Text>

           
            <Text style={styles.subheading}>Available languages</Text>
            <Text style={styles.subtext}>English, Hindi, Konkani</Text>

           
            <Text style={styles.subheading}>Address</Text>
            <Text style={styles.subtext}>Vagator, North Goa</Text>

            
            <Text style={styles.sectionTitle}>Ammenities</Text>
            <View style={styles.amenities}>
              <View style={styles.amenityItem}>
                <FontAwesome name="wifi" size={24} color="#fff" />
                <Text style={styles.amenityText}>Free WiFi</Text>
              </View>
              <View style={styles.amenityItem}>
                <FontAwesome name="car" size={24} color="#fff" />
                <Text style={styles.amenityText}>Parking</Text>
              </View>
              <View style={styles.amenityItem}>
                <MaterialIcons name="ac-unit" size={24} color="#fff" />
                <Text style={styles.amenityText}>Air Conditioning</Text>
              </View>
            </View>

            
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.mapMock}>
              <Image source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/vagatorLoc.png')} style={styles.mapMock} />
            </View>

           
            <Text style={styles.sectionTitle}>Reviews</Text>
            <View style={styles.reviewSection}>
              <View style={styles.leftReview}>
                <Text style={styles.rating}>4.4</Text>
                <View style={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesome key={i} name="diamond" size={12} color={i < 4 ? '#ff6600' : '#666'} style={{ marginHorizontal: 2 }} />
                  ))}
                </View>
                <Text style={styles.reviewCount}>8,700 reviews</Text>
              </View>

              <View style={styles.reviewBars}>
                {[5, 4, 3, 2, 1].map((rating, idx) => (
                  <View key={idx} style={styles.barRow}>
                    <Text style={styles.barLabel}>{rating}</Text>
                    {/* <ProgressBar progress={(5 - idx) * 0.2} color="#fff" style={styles.progressBar} /> */}
                  </View>
                ))}
              </View>
            </View>

            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.userReviews}>
              {[
                {
                  name: 'Jordan Plex',
                  comment: "Had an amazing time! Can’t wait for my next visit here 🔥",
                  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                },
                {
                  name: 'Jane Doe',
                  comment: "Had an amazing time! Can’t wait for my next visit 🔥",
                  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                },
              ].map((user, index) => (
                <View key={index} style={styles.reviewCard}>
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
                  <View>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userComment}>{user.comment}</Text>
                  </View>
                </View>
              ))}
           </ScrollView>
      </ScrollView>
        
      <View style={styles.floatingContainer}>
        <View style={styles.left}>
          <Text style={styles.entryLabel}>Entry Fee</Text>
          <Text style={styles.entryPrice}>₹ 5,000</Text>
        </View>
          <TouchableOpacity style={styles.planButton} onPress={()=>navigation.replace('payment')}>
            <Text style={styles.planText}>Plan trip</Text>
          </TouchableOpacity>
      </View>

    </View>
    
  );
}

const Tag = ({ label }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 0,
  },
   backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  iconCircle: {
    backgroundColor: '#2a2a2a',
    padding: 10,
    borderRadius: 25,
    marginTop:40,
    
  },
  image:{
    marginTop:10,
    height:100,


  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    lineHeight: 30,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  stars: {
    fontSize: 18,
  },
  reviewText: {
    color: '#bbb',
    fontSize: 14,
    marginLeft: 10,
  },
  rank: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    backgroundColor: '#2a2a2a',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  description: {
    color: '#bbb',
    fontSize: 13,
    marginTop: 12,
    lineHeight: 20,
  },
  subheading: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 20,
    fontWeight: '600',
  },
  subtext: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  amenities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amenityItem: {
    alignItems: 'center',
  },
  amenityText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
  mapMock: {
    height: 200,
    backgroundColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:390,
  },

  reviewSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftReview: {
    width: 80,
    alignItems: 'center',
  },
  rating: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewCount: {
    color: '#aaa',
    fontSize: 12,
  },
  reviewBars: {
    flex: 1,
    marginLeft: 20,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  barLabel: {
    color: '#fff',
    width: 15,
    fontSize: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#444',
    borderRadius: 5,
    marginLeft: 5,
  },
   userReviews: {
    marginTop: 20,
    marginBottom: 30,
  },
  reviewCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 220,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userComment: {
    color: '#ddd',
    fontSize: 12,
    width: 220,
  },
  
  floatingContainer: {
    backgroundColor: '#2d2d2d',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 25,
    marginTop:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  left: {
    flexDirection: 'column',
  },
  entryLabel: {
    color: '#aaa',
    fontSize: 13,
  },
  entryPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  planButton: {
    backgroundColor: '#ff7a00',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 25,
  },
  planText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
