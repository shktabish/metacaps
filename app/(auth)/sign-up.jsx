import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import { router } from 'expo-router'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView 
        contentContainerStyle={{ height: "100%", justifyContent: 'center' }} 
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>create your Metacaps account</Text>
        <View style={styles.inputContainer}>
          <AppInput data={number} setData={setNumber} label={"Mobile Number"} icon="phone-outline" />
          <AppInput data={name} setData={setName} label={"Name"} icon="account-outline" />
          <AppInput data={email} setData={setEmail} label={"Email"} icon="email-outline" />
          <AppInput data={password} setData={setPassword} label={"Password"} icon="lock-outline" />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>forgot your password?</Text>
        </TouchableOpacity>
        <AppButton title={"Sign Up"} />
        <Text className="text-center mt-10 text-lg" >
          Do you already have an account? 
          <TouchableWithoutFeedback onPress={() => router.push("/sign-in")} >
            <Text className="text-[#36D6CA]"> Login</Text>
          </TouchableWithoutFeedback>
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#AAA',
  },
  inputContainer: {
    marginTop: 40,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#AAA',
    textAlign: 'right',
    marginTop: 8,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  loginText: {
    color: '#0000FF',
  },
})

export default SignUp
