import React, { useState } from "react"
import LoginContext from "./LoginContext";

interface LoginProviderProps {
  children: JSX.Element | JSX.Element[],
  isLogin?: boolean,
  setIsLogin?: () => {}
}

const LoginProvider = ({children}: LoginProviderProps) => {
  // 이 provider에서 state를 관리하도록 한다.
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userId, setUserID] = useState<string>('');

  return (
    <LoginContext.Provider value={{isLogin: isLogin, setIsLogin: setIsLogin, userId: userId, setUserId: setUserID}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider