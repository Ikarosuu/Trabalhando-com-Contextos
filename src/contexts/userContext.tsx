import { createContext } from 'react'

// tipagem
interface UserContextProps {
    nome: string
}

// Criando um contexto
export const UserContext = createContext<UserContextProps | undefined>(undefined)

// Criando o provider
export default function UserContextProvider({children}: any){
    const contextValue = { nome: 'fulano'}

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}