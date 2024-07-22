import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-red-500 justify-center items-center" >
      <TouchableOpacity onPress={() => router.push("sign-in")}>
        <Text className="text-3xl" >About</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default index