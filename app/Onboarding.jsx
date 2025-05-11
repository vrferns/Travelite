import { returnStatement } from '@babel/types';
import { title } from 'process';
import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282D31', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/image1.png'),
    title: '  Travel with all\n  your friends',
    subtitle: '    Get your friends involved, get the most\n    out of your trip.Plan, Ideate\n    and Experience the magic together ',
  },
  {
     id: '2',
     image: require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/image2.png'),
     title: '  Your Experience\n  is on us',
     subtitle: '     We have currated the most exclusive\n     place to take your experience to the\n     next level ',
   },
   {
     id: '3',
     image: require('C:/Users/__Tina__/Desktop/PROJECT/Travelite/assets/images/image3.png'),
     title: '  What are you\n  waiting for?',
     subtitle: '     Wondering how to travel at the\n     cheapest possible and where can you\n     get the best deals?',
   },
];
 
const Slide = ({item}) => {
    return (
        <View style={{alignItems: 'flex-start'}}>
            <View  style={{ flex:0.3}}/>
            <Image
                source={item.image}
                style={[styles.image, {height: '200px',width,borderColor:"white",resizeMode:'contain'}]}
            />
            <View style={{ flex:0.3}}>

            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            
        </View>

    );
};
const Onboarding = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const Footer = ({item , index})=>{
        return (
            <View 
                style={{
                    height:height * 0.15,
                    justifyContent:'space-between',
                    paddingHorizontal:20,

                }}
             >
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        margin:20,
                    }}>
                    {slides.map((_,index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.indicator,
                                currentSlideIndex == index &&{
                                    backgroundColor: 'orange',
                                    width :15,

                                },
                            ]}/>
                                    
                            
                    ))}
                    <View style={{width:150}}/>
                    {
                        currentSlideIndex == slides.length -1 ?
                        <View>
                            <TouchableOpacity style={[styles.btn]} onPress={()=>navigation.replace('join')}>
                                <Text style={styles.btnText}>{"Continue"}</Text>
                            </TouchableOpacity>
                        </View>:<View/>
                    }
                    
                </View>
                
                
            </View>
        );
    };
    

    
    const updateCurrentSlideIndex = (e)=>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };


    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.primary}}>
            <StatusBar backgroundColor={COLORS.primary}/>
            <FlatList 
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                data={slides} 
                contentContainerStyle={{height: height * 0.75}}
                horizontal 
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Slide item={item}/> } 
            />

            <Footer/>

        </SafeAreaView>
            

    );
};



const styles = StyleSheet.create({
    image:{
        flex:0.7,
        justifyContent:'center',
        padding: 50,
    },


    title:{
        color: COLORS.white,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'left'
    },

    subtitle:{
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'left',
        lineHeight: 23,
    },
    
    indicator:{
        height:8,
        width:8,
        backgroundColor: 'grey',
        marginHorizontal:1,
        borderRadius: 4,
    },

    btn:{
        height: 50,
        width: 150,
        borderRadius:50,
        backgroundColor:'#FF740F',
        justifyContent:'center',
        alignItems:'center',
    },

    btnText:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }


});
export default Onboarding;