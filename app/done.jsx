import { Image, StyleSheet,StatusBar, Text, View,Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#ff7a00', white: '#fff'};

const Welcome = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("home");
        },3000);
        return () => clearTimeout(timer);
    },[navigation]);


  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary}/>
        <Image 
        style={[styles.image, {height,width,resizeMode:'contain'}]}
        source={require("C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/done.png")}/>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },
    image:{
        flex:0.7,
        justifyContent:'center',
        padding: 430,
    },
})
