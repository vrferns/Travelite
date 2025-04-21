import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'


const home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.replace('CustScreen1')}>
        <Text>home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})