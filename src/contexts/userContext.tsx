import { createContext } from 'react'

// Criando um contexto
export const UserContext = createContext({})

// Criando o provider
export default function UserContextProvider({children}: any){
    const contextValue = { nome: 'fulano'}

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}