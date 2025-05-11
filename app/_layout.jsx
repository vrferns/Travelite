import 'react-native-gesture-handler';
import React from 'react';

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
import HomeCards from '../app/HomeCards';
import EmailAuth from '../app/EmailAuth';
import ResetPass from '../app/ResetPass';
import Signup from '../app/Signup';
import Terms from '../app/Terms';
import Notify from '../app/Notify';
import reminder from '../app/reminder';
import plan1 from '../app/plan1';
import plan2 from '../app/plan2';
import plan3 from '../app/plan3';
import payment from '../app/payment';
import ConfirmPay from '../app/ConfirmPay';
import done from '../app/done';

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
        <Stack.Screen name="EmailAuth" component={EmailAuth}/>
        <Stack.Screen name="RestPass" component={ResetPass}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Terms" component={Terms}/>
        <Stack.Screen name="Notify" component={Notify}/>
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="HomeCards" component={HomeCards}/>
        <Stack.Screen name="reminder" component={reminder}/>
        <Stack.Screen name="CustScreen1" component={CustScreen1}/>
        <Stack.Screen name="CustScreen2" component={CustScreen2}/>
        <Stack.Screen name="CustScreen3" component={CustScreen3}/>
        <Stack.Screen name="plan1" component={plan1}/>
        <Stack.Screen name="plan2" component={plan2}/>
        <Stack.Screen name="plan3" component={plan3}/>
        <Stack.Screen name="payment" component={payment}/>
        <Stack.Screen name="ConfirmPay" component={ConfirmPay}/>
        <Stack.Screen name="done" component={done}/>
      </Stack.Navigator>
    
    
  );
};

export default App;

