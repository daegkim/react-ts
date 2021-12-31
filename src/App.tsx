import React, { useState } from 'react';
import './App.css';
import CustomDiv from './components/CustomDiv';
import FragmentsList from './components/FragmentsList';
import Input from './components/Input';
import List, { ItemType } from './components/List';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import LoginProvider from './contexts/LoginProvider';
import ErrorBoundary from './error/ErrorBoundary';

const App = () => {
  // useState hook
  const [items, setItems] = useState<ItemType[]>([])
  const [isShown, setIsShown] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [sharedInputValue, setSharedInputValue] = useState<string>('')

  // 이벤트 처리 함수 생성
  const handleListAddClick = (): void => {
    const item = {
      id: (items.length + 1).toString(),
      content: (items.length + 1).toString()
    }
    // set state를 통해서 리렌더링
    setItems([...items, item])
  }

  const handleIsShownClick = (): void => {
    setIsShown(!isShown)
  }

  // onChange event타입은 React에 정의되어 있다.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    alert(inputValue)
  }

  return (
    <div className="app">
      <div>
        {/* props 전달 */}
        <List items={items}></List>
        {/* 이벤트 처리 */}
        <button onClick={handleListAddClick}>add</button>
      </div>
      <div>
        {/* 조건부 렌더링 */}
        {
          isShown && <p>fixed</p>
        }
        {
          isShown ? <p>true</p> : <p>false</p>
        }
        <button onClick={handleIsShownClick}>show</button>
      </div>
      <div>
        {/* form형식 */}
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={handleInputChange}></input>
          <button type='submit'>submit</button>
        </form>
      </div>
      <div>
        {/* State 끌어올리기 setState를 하위컴포넌트에서 호출하도록 해서 리렌더링하도록 함 */}
        <Input sharedInputValue={sharedInputValue} setSharedInputValue={setSharedInputValue}></Input>
        <Input sharedInputValue={sharedInputValue} setSharedInputValue={setSharedInputValue}></Input>
      </div>
      <div>
        {/**
         * 컴포넌트 합성
         * 컴포넌트 입력시 엔터를 입력하면 자동으로 props.children으로 전달된다. 
         */}
        <CustomDiv>
          <p>hello</p>
        </CustomDiv>
      </div>
      <div>
        {/* context와 context의 provider 사용 */}
        <LoginProvider>
          <Login></Login>
          <UserInfo></UserInfo>
        </LoginProvider>
      </div>
      <div>
        <ErrorBoundary>
          <CustomDiv>
            <p>custom div</p>
            <CustomDiv hasError>
            </CustomDiv>
          </CustomDiv>
        </ErrorBoundary>
      </div>
      <div>
        <ul style={{listStylePosition: 'inside', padding: '0px'}}>
          <FragmentsList list={['a','b','c','d']}></FragmentsList>
        </ul>
      </div>
    </div>
  );
}

export default App;
