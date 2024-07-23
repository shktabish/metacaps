import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import AppButton from '../components/AppButton'
import Onboarding from './Onboarding'
import Onboardingitem from './Onboardingitem'
const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-white " >
      <View className="mt-10 mx-7">
      <Text className=" mt-10 text-3xl justify-end font-bold text-black">MetaCaps</Text>
      <Text className="text-xl text-gray-400 justify-end">Begin your fun-d journey!</Text></View>
      <Onboarding/>
      <View className="w-full mb-36 ">
      <AppButton  className="mx-7 mt-10"
      handlePress={()=>router.push('./sign-in')} 
      title="Sign-In"/></View>
     
    </SafeAreaView>
  )
}

export default index