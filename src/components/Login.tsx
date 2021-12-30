import React, { useContext, useRef } from "react"
import LoginContext, { LoginContextType } from "../contexts/LoginContext";


const Login = () => {
  const context = useContext<LoginContextType>(LoginContext)
  const pwdRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    context.setIsLogin(!context.isLogin)
    // 초기값이 null일수도 있기 때문에 아래와 같은 조건문이 있어야 value를 초기화 시킬 수 있음
    if(pwdRef.current !== null){
      //pwdRef가 가리키는 html element의 DOM을 직접 컨트롤
      pwdRef.current.value = ''
    }
    context.setUserId('')
  }

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setUserId(e.target.value);
  }

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="id" type="text" value={context.userId} onChange={handleChangeId}></input>
      {/* input의 속성에 pwdRef를 연결 */}
      <input placeholder="pwd" ref={pwdRef}type="password"></input>
      <button type="submit">{ context.isLogin ? 'logout' : 'login' }</button>
    </form>
  )
}

export default Login