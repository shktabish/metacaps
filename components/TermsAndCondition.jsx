import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'

const TermsAndCondition = () => {
    const [isChecked, setIsChecked] = useState(false)

    const text = () => (
      <Text>
        I accept the <Text style={{ color: 'blue' }}>Terms & Conditions</Text> and <Text style={{ color: 'blue' }}>Privacy Policy</Text> of Metacaps.
      </Text>
    )

  return (
    <View className="mt-4 flex-row items-center">
        <CheckBox
            style={{ flex: 1, padding: 10}}
            onClick={() => setIsChecked(!isChecked)}
            isChecked={isChecked}
            leftText={text()}
            leftTextStyle={{ color: 'black', paddingRight: 10 }}
        />
    </View>
  )
}

export default TermsAndCondition