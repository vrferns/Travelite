import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Password = ({navigation}) => {
  return (
    <View>
        <View style={styles.button}>
        <TouchableOpacity style={styles.continueButton}  onPress={()=>navigation.replace('Phoneauth')}>
            <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        </View>
       
      
    </View>
  )
}

export default Password

const styles = StyleSheet.create({
    continueButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: "#FF740F",
        //padding: 15,
        borderRadius: 50,
        width: "100%",
        alignItems: "center",
        //marginBottom: 20,
      },
      continueText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
    
})