import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Details = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 ,color:'black'}}>Details Page</Text>
            <Text style={{ fontSize:10,color:'black' }}>Props Value - {route.params.email}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdClass')}>
                <Text style={{ fontSize: 15,color:'black'}}>Redirect To Third Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details