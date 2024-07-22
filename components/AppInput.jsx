import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const AppInput = ({ icon, label, data, setData, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="my-2" >
        <Text className="text-lg text-[#AAA]">{label}</Text>
        <View style={[styles.inputContainer, { borderColor: isFocused ? 'black' : '#AAA'}]} >
            <MaterialCommunityIcons name={icon} size={24} color="#b3b3b3" style={styles.icon} />
            <TextInput
                placeholder={`Enter your ${label.toLowerCase()}`}
                placeholderTextColor="#b3b3b3"
                value={data}
                onChangeText={setData}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
                style={styles.input}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
    },
    icon: {
        marginHorizontal: 10,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: 15,
        color: 'black',
    },
    label: {
        color: '#b3b3b3',
        fontSize: 16,
        marginBottom: 5,
    }
}) 

export default AppInput