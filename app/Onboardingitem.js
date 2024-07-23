import { StyleSheet, Text, useWindowDimensions, View ,Image} from 'react-native'
import React from 'react'
import slides from './slides';
export default Onboardingitem = ({item}) => { 
    const {width}=useWindowDimensions();
  return (
    <View style={[styles.container,{width}]}>
      <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
    

    <View style={{flex:0.3}}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    image:{ 
        width:'50%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
        

    },
    title:{
        fontWeight:'800',
        fontSize: 28,
        marginBottom:10,
        color:'#36D6CA'
    } 
})