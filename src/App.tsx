import React, { useState } from 'react';
import './App.css';
import List, { ItemType } from './components/List';

const App = () => {
  // useState hook
  const [items, setItems] = useState<ItemType[]>([])
  const [isShown, setIsShown] = useState<boolean>(false)

 //이벤트 처리 함수 생성
  const handleListAddClick = (): void => {
    const item = {
      id: (items.length + 1).toString(),
      content: (items.length + 1).toString()
    }
    //set state를 통해서 리렌더링
    setItems([...items, item])
  }

  const handleIsShownClick = (): void => {
    setIsShown(!isShown)
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
    </div>
  );
}

export default App;
