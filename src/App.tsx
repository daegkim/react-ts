import React, { useState } from 'react';
import './App.css';
import List, { ItemType } from './components/List';

const App = () => {
  // useState hook
  const [items, setItems] = useState<ItemType[]>([])

 //이벤트 처리 함수 생성
  const handleListAddClick = (): void => {
    const item = {
      id: (items.length + 1).toString(),
      content: (items.length + 1).toString()
    }
    //set state를 통해서 리렌더링
    setItems([...items, item])
  }

  return (
    <div className="app">
      <div>
        {/* props 전달 */}
        <List items={items}></List>
        {/* 이벤트 처리 */}
        <button onClick={handleListAddClick}>add</button>
      </div>
    </div>
  );
}

export default App;
