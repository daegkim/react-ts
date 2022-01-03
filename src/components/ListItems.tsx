import { ItemType } from "./List"

interface ListItems {
  items: ItemType[]
}

const ListItems = ({items}: ListItems) => {
  return (
    <>
      {/* Fragment를 사용해서 불필요한 요소로 감싸지 않아도 된다.*/}
      {
        /**
         * 1. map을 이용하여 list 출력
         * 2. key에는 loop의 index를 사용하는 것보다 각자 고유의 id를 사용하는 것이 성능상 좋다.
         * [출처]https://ko.reactjs.org/docs/reconciliation.html
         */
      }
      {
        items.map((val, idx) => {
          return (
            <li key={val.id}> {val.content} </li>
          )
        })
      }
    </>
  )
}

export default ListItems