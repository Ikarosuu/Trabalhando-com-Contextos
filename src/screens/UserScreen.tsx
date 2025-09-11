import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../App';
//usando contexto
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext';

type UserScreenProps = {
    route: RouteProp<RootStackParamList, 'User'>
}

export default function UserScreen({route}: UserScreenProps) {
    const { username } = route.params

    // usando contexto
    const UserContextValue = useContext(UserContext)
    const nome = UserContextValue?.nome || 'Nenhum nome saldo'

    return (
        <View>
            <Text style={{fontSize: 32}}>Rota: {username}</Text>
            <Text style={{fontSize: 32}}>Context API: {nome}</Text>
        </View>
    );
}