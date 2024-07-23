import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const AppButton = ({ title, style,handlePress,containerStyles,textStyles,isLoading }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}
    onPress={handlePress}
    activeOpacity={0.7}
    className={`${isLoading?'opacity-50':''}`} disabled={isLoading}>
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, 
    },
    button: {
        width: '100%',
        backgroundColor: '#36D6CA',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize:25,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default AppButton