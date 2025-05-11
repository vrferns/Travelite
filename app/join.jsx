import { Image,StyleSheet,StatusBar, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'


const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282D31', white: '#fff'};

const join = ({navigation}) => {
  return (
     <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary}/>
            <View style={{ flex:0.3}}>
                <Image 
                style={[styles.image, {height:'200px',width,resizeMode:'contain'}]}
                source={require("C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/join.png")}/>
            </View>
            <View>
                <Text style={[styles.title1]}>
                   Join millions  </Text>
                <Text  style={[styles.title]}> of students </Text>  
                <Text  style={[styles.title]}> adventuring </Text>   
               
            </View>
            <View>
            <Text style={[styles.subtitle1]}>
                 Wondering how to plan great budget  </Text>
            <Text  style={[styles.subtitle]}> 
                    trips and get the best possible deals? </Text>  
            <Text  style={[styles.subtitle]}>
                    You're come to the right place </Text> 

            </View>
            <View>
                 <TouchableOpacity style={[styles.btn]} onPress={()=>navigation.replace('payment')}>
                    <Text style={styles.btnText}>{"Continue"}</Text>
                 </TouchableOpacity>
            </View>
           
        
        
          
        </View>
    )
}

export default join

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 4,
        justifyContent: "center",
        alignContent:"center"
      },
    
     image:{
        flex:0.7,
        justifyContent:'center',
        padding: 150,

    },
     title1:{
            color: COLORS.white,
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 300,
            textAlign: 'center',
            paddingTop:'1500px',
        },
        title:{
            color: COLORS.white,
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop:'1500px',
        },
        subtitle1:{
            color: COLORS.white,
            fontSize: 13,
            marginTop: 20,
            marginLeft:50,
            marginBottom:0,
            maxWidth: '70%',
            textAlign: 'center',
            lineHeight: 23,
        },
        subtitle:{
            color: COLORS.white,
            fontSize: 13,
            maxWidth: '70%',
            textAlign: 'center',
            marginLeft:50,
            lineHeight: 23,
        },
        btn:{
            backgroundColor: "#FF740F",
            padding: 15,
            borderRadius: 50,
            marginTop: 60,
            alignItems: "center",
        },
        btnText:{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
        }
})