import React from 'react'
import { View,Alert,Image,TextInput,Button ,Text, TouchableOpacity } from 'react-native'


const Home = ({ navigation }) => {

    return (
              <View
                  style={{
                    backgroundColor : '#ADD8E6',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems:'center', }}>

                    <Text
                    style={{fontSize:30,margin:30}}>
                    Start React Learning
                    </Text>

                    <Image
                      source={{
                        uri: 'https://th.bing.com/th/id/OIP.ODc7gj3-ijGW67To5VcPrAHaGx?pid=ImgDet&rs=1',
                      }}
                      style={{width: 200, height: 200 }}
                    />



              <TextInput
                style={{
                  height:50,
                  width:300,
                  borderColor: 'white',
                  borderWidth: 3,
                  margin:30,
                  textAlign:'center',
                }}
                 placeholder="Name"
                 />


                 <TextInput
                style={{
                  height:50,
                  width:300,
                  borderColor: 'white',
                  borderWidth: 3,
                  margin:30,
                  textAlign:'center',
                }}
                 placeholder="Password"
                 />

                <Button style={{margin:30 }} title="Sign UP"
                    onPress={() => Alert.alert(
                            'Done , Thank you')}  />


         <Text style={{color:'black'}} > Welcome To Home Page </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Details', { name: 'Full Stack Dev', age: 25, email: 'test@test.com' })}>
                <Text style={{color:'black'}}  >Redirect To Details</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Home