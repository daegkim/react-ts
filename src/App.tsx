import React, { useState } from 'react';
import './App.css';
import List, { ItemType } from './components/List';

const App = () => {
  // useState hook
  const [items, setItems] = useState<ItemType[]>([])
  const [isShown, setIsShown] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

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
    </div>
  );
}

export default App;
