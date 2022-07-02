import { View, Text,TextInput,Button,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const LoginScreen = ({navigation}) => {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  console.log({email:email, password:password});


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
         <TextInput placeholder='Enter email' value={email} style={styles.input} onChangeText={(text)=>setEmail(text)} />
         <TextInput placeholder='Enter password' value={password} style={styles.input} secureTextEntry onChangeText={(password)=>setPassword(password)} />
        <Button title='Login' />
        <View style ={{flexDirection:'row', marginTop:20}}>
           <Text>Don't have an account? </Text>
           <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },

  wrapper:{
    width:'80%'
  },
  input:{
    marginBottom:12,
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius:5,
    paddingHorizontal:14,
    paddingVertical:10,
  },
  link:{
    color:'blue',

  }
})

export default LoginScreen