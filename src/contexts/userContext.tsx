import { createContext, useState } from 'react'

// tipagem
interface UserContextProps {
    nome: string
    loginName: string
    save: (user: string) => void
}

// Criando um contexto
export const UserContext = createContext<UserContextProps | undefined>(undefined)

// Criando o provider
export default function UserContextProvider({children}: any){
    
    const [loginName, setloginName] = useState<string>('')  //Write and Read
    
    const contextValues = { nome: 'fulano', loginName: loginName, save: saveLoginUserCache}

    function saveLoginUserCache(user: string){
        if(user != ''){
            setloginName(user)
        }
    }

    return(
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}