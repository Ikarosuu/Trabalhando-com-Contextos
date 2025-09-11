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
    const userContextValue = useContext(UserContext)
    const nomeDinamico = userContextValue?.loginName || 'Nenhum nome salvo'
    const nomeEstatico = userContextValue?.nome || 'Nenhum nome fornecido'

    return (
        <View>
            <Text style={{fontSize: 32}}>Nome da rota: {username}</Text>
            <Text style={{fontSize: 32}}>Nome estatico: {nomeEstatico}</Text>
            <Text style={{fontSize: 32}}>Nome Donâmico: {nomeDinamico}</Text>
        </View>
    );
}