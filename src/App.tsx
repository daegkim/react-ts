import React, { useState } from 'react';
import './App.css';
import List, { ItemType } from './components/List';

const App = () => {
  // useState hook
  const [items, setItems] = useState<ItemType[]>([])

  return (
    <div className="app">
      <div>
        {/* props 전달 */}
        <List items={items}></List>
      </div>
    </div>
  );
}

export default App;
