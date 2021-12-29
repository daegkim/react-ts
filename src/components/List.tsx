import React from 'react';
import './List.css';

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
      {
        /**
         * 1. map을 이용하여 list 출력
         * 2. key에는 loop의 index를 사용하는 것보다 각자 고유의 id를 사용하는 것이 성능상 좋다.
         * [출처]https://ko.reactjs.org/docs/reconciliation.html
         */
        items.map((val) => {
          return (
            <li key={val.id}>{val.content}</li>
          )
        })
      }        
      </ul>
    </div>
  );
}

export default List;
