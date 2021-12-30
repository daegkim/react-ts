import React, { useContext } from "react"
import LoginContext, { LoginContextType } from "../contexts/LoginContext";


const Login = () => {
  const context = useContext<LoginContextType>(LoginContext)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    context.setIsLogin(!context.isLogin)
  }

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setUserId(e.target.value);
  }

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="id" type="text" onChange={handleChangeId}></input>
      <input placeholder="pwd" type="password"></input>
      <button type="submit">{ context.isLogin ? 'logout' : 'login' }</button>
    </form>
  )
}

export default Login