import { View, Text,TextInput,Button,TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <View>
         <TextInput placeholder='Enter email' />
         <TextInput placeholder='Enter password' secureTextEntry />
        <Button title='Login' />
        <View>
           <Text>Don't have an account? </Text>
           <TouchableOpacity>
            <Text>Register</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen