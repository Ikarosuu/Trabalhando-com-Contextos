import { View, Text, TextInput, Button } from "react-native";
import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from "../../App";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({navigation}: HomeScreenProps){
    const [inputText, setinputText] = useState("")

    const navigateToUserScreen = () => {
        navigation.navigate("User", { username: inputText})
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