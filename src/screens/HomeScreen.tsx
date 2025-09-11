import { View, TextInput, Button } from "react-native";
import { useState, useContext } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from "../../App";
import { UserContext } from "../contexts/userContext";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({navigation}: HomeScreenProps){
    const [inputText, setinputText] = useState("")
    const userContext = useContext(UserContext)

    const navigateToUserScreen = () => {
        userContext?.save(inputText)
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