import { View, Text, Image} from 'react-native'
import React, { useEffect } from 'react'
import "react-native-tailwindcss"
import { useNavigation } from '@react-navigation/native'

export default function PrepOrderScreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },3000);
    }, [])

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image className="h-80 w-80" source={require('../assets/images/delivery.gif') }/>
    </View>
  )
}