import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,StatusBar} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';

const COLORS = {primary: '#282D31', white: '#fff'};

export default function ConfirmAndPayScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView >
        <StatusBar backgroundColor={COLORS.primary}/>
      
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.replace('HomeCards')}>
              <Ionicons name="arrow-back" size={24} color="#fff" />

          </TouchableOpacity>
          
        </View>
        <Text style={styles.label}>PAYMENT</Text>

        <Text style={styles.title}>Confirm & pay</Text>
        <Text style={styles.splitText}>Price splitup</Text>

      
        <View style={styles.hotelCard}>
          <Image
            source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/vagator.png')}
            style={styles.hotelImage}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.hotelTitle}>Holiday Inn Express Comfort Stays, Sangolda, Bardez</Text>
          </View>
        </View>

      
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>₹6,750</Text>
        </View>

      
        <Text style={styles.sectionHeader}>Details</Text>

        <View style={styles.detailItem}>
          <View style={styles.detailLeft}>
            <MaterialIcons name="date-range" size={18} color="white" />
            <Text style={styles.detailText}>4th - 7th Jan</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailItem}>
          <View style={styles.detailLeft}>
            <Ionicons name="people" size={18} color="white" />
            <Text style={styles.detailText}>3 friends</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        
        <Text style={styles.sectionHeader}>Pay with</Text>

        <View style={styles.paymentOption}>
          <FontAwesome name="credit-card" size={20} color="#fff" />
          <Text style={styles.paymentText}>Credit or Debit Card</Text>
          <TouchableOpacity>
              <Entypo name="plus" size={18} color="#888" />
          </TouchableOpacity>
        
        </View>

        <View style={styles.paymentOption}>
          <Image
            source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/razorpay.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text style={styles.paymentText}>Razorpay</Text>
          <TouchableOpacity>
              <Entypo name="plus" size={18} color="#888" />
          </TouchableOpacity>
          
        </View>

       
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={styles.couponText}>Enter a coupon</Text>
        </TouchableOpacity>
       
        <View style={styles.policyContainer}>
          <Text style={styles.policyHeader}>Cancellation policy</Text>
          <Text style={styles.policyText}>
            Cancellation is free before 4th Jan, after that the reservation is non refundable
          </Text>
          <TouchableOpacity>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        
        <Text style={styles.agreementText}>
          By clicking the button below, I agree to the <Text style={styles.link}>Host’s stay policy</Text>,
          <Text style={styles.link}> Travellites rebooking & refunding policy</Text> & that Travellite can
          charge my payment methods if I’m responsible for any damage
        </Text>
      </ScrollView>
     
      <TouchableOpacity style={styles.confirmButton} onPress={()=>navigation.replace('done')}> 
        <Text style={styles.confirmButtonText}>Confirm & pay</Text>
      </TouchableOpacity>
        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
    paddingTop:40,
  },
  header: {
   flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 10,
    marginTop:30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
  },
  splitText: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 4,
    marginBottom: 15,
  },
  hotelCard: {
    flexDirection: 'row',
    backgroundColor: '#3e4246',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  hotelImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  hotelTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  totalLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  totalAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3e4246',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
  },
  editText: {
    color: '#1e90ff',
    fontWeight: '600',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e4246',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paymentText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  couponText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight:'bold',
    marginTop: 15,
    marginBottom:15,
  },
   policyContainer: {
    marginBottom: 20,
  },
  policyHeader: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  policyText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },
  learnMore: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  divider: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  agreementText: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 20,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  confirmButton: {
    backgroundColor: '#ff7a00',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 30,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
