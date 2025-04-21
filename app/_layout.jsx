
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from '../app/Onboarding';
import Login from '../app/Login';
import Password from '../app/Password'
import PhoneAuth from '../app/PhoneAuth';
import join from '../app/join';
import CustScreen1 from '../app/CustScreen1';
import CustScreen2 from '../app/CustScreen2';
import CustScreen3 from '../app/CustScreen3';
import home from '../app/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen } from 'expo-router';
import Welcome from '../app/Spalash';

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome"  component={Welcome} />
        <Stack.Screen name="Onboarding"  component={Onboarding} /> 
        <Stack.Screen name="join"  component={join} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="PhoneAuth" component={PhoneAuth}/>
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="CustScreen1" component={CustScreen1}/>
        <Stack.Screen name="CustScreen2" component={CustScreen2}/>
        <Stack.Screen name="CustScreen3" component={CustScreen3}/>
      </Stack.Navigator>

   
  
      
    
    
      
        
           
            
       
      
    
  );
};

export default App;



