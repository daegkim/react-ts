interface FragmentsListProps {
  list: string[]
}

const FragmentsList = ({list}: FragmentsListProps) => {
  return (
    <>
      {/* Fragment를 사용해서 불필요한 요소로 감싸지 않아도 된다.*/}
      {
        list.map((val, idx) => {
          return (
            <li key={idx}> {val} </li>
          )
        })
      }
    </>
  )
}

export default FragmentsList