import { View, Text, TextInput, Button } from "react-native";
import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

export default function UserScreen(){
    const [inputText, setinputText] = useState("")

    const navigateToUserScreen = () => {

    }
    
    return(
        <View>
            <TextInput 
            placeholder="Digite seu nome..." 
            value={inputText}
            onChangeText={(text)=> setinputText(text)}
        />
        <Button title="Logar" onPress={navigateToUserScreen}/>
        </View>
    )
}