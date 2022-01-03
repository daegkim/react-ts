import withLoginChecker from "../HOC/withLoginChecker";

export interface SelectedItemsProps {
  items: string[]
}

const SelectedItems = ({items}: SelectedItemsProps) => {
  return (
    <>
      {
        items.map((val, idx) => {
          return (
            <p style={{padding: '0px', margin: '0px'}} key={idx}> {val} </p>
          )
        })
      }
    </>
  )
}

export default withLoginChecker(SelectedItems)