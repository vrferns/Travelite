import { StyleSheet, Text, View,StatusBar,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const COLORS = {primary: '#282D31', white: '#fff'};
const home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.headerRow}>
              <Image
                                source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/logoTrav.png')}  // Replace with avatar URL
                                style={styles.badge}
                              />
              <View style={styles.avatar} >
                <TouchableOpacity onPress={()=>navigation.replace('reminder')}>
                <Image
                            source={require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/profile.png')}  
                            style={styles.avatar}
                   />

                </TouchableOpacity>
                  
              </View>
            </View>
    </View>
  )
}

export default home

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
})
