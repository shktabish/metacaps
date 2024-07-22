import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import AppInput from '../components/AppInput'
import AppButton from '../components/AppButton'
import TermsAndCondition from '../components/TermsAndCondition'
import { Link } from 'expo-router'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView className="flex-1 p-4">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} 
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-3xl font-bold">Login</Text>
          <Text className="text-lg text-gray-400">with your Metacaps account</Text>
          <View className="mt-10 space-y-4">
            <AppInput data={email} setData={setEmail} label={"Email"} icon="email-outline" />
            <AppInput data={password} setData={setPassword} label={"Password"} icon="lock-outline" />
          </View>
          <TouchableOpacity>
            <Text className="text-sm text-right text-gray-400">forgot your password?</Text>
          </TouchableOpacity>
          <TermsAndCondition />
          <AppButton title={"Login"} />
          <Link href="/SignUp" className="mt-10 text-center" >Do not have an account? Sign Up</Link>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn
