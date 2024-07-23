import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Onboardingitem from './Onboardingitem.js'

const slides= [
    {
        id:'1',
        title:'investing',
        image: require('../assets/hi.png'),

    },
    {
        id:'2',
        title:'investing1',
        image: require("../images/2.png"),

    },
    {
        id:'3',
        title:'investing2',
        image: require("../images/3.png"),

    },
    {
        id:'4',
        image: require("../images/4.png"),
        title:'investing3',
    }
]

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={slides}
      renderItem={({item})=> <Onboardingitem item={item}/>}
      keyExtractor={(item)=>item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false} 
      pagingEnabled
      bounces={false}/>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})