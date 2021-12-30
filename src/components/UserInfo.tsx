import React, { useContext } from "react"
import LoginContext, { LoginContextType } from "../contexts/LoginContext";


const UserInfo = () => {
  const context = useContext<LoginContextType>(LoginContext)

  return (
    <div>
      <p>{context.isLogin ? `hello ${context.userId}` : 'please login'}</p>
    </div>
  )
}

export default UserInfo