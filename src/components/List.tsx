import React from 'react';
import './List.css';
import ListItems from './ListItems';

/**
 * props의 items를 구성하는 객체의 interface
 * 컴포넌트를 호출할 때 사용하기 위해서 export한다.
 */
export interface ItemType {
  id: string,
  content: string
}

//props interface
interface ListProps {
  items: ItemType[]
}

const List = ({items}: ListProps): JSX.Element => {
  return (
    <div className="list">
      <ul>
        <ListItems items={items}></ListItems>    
      </ul>
    </div>
  );
}

export default List;
