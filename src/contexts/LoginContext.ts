import React, { createContext } from "react"

export interface LoginContextType {
  isLogin: boolean,
  userId: string,
  setIsLogin: (isLogin: boolean) => void,
  setUserId: (userId: string) => void
}

const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  userId: '',
  setIsLogin: () => {},
  setUserId: () => {}
})

export default LoginContext