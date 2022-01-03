import React, { useContext, useState } from "react"
import { SelectedItemsProps } from "../components/SelectedItems"
import LoginContext, { LoginContextType } from "../contexts/LoginContext"

interface WrappedProps {
  items: string[]
}

const withLoginChecker = <T extends WrappedProps>(WrappedComponent: React.ComponentType<T>): React.FC<WrappedProps> => {
  return ({...props}) => {
    const context = useContext<LoginContextType>(LoginContext)

    return (
      <div>
        {
          context.isLogin ? <WrappedComponent {...props as T}></WrappedComponent>
          : <p> please login! By LoginChecker </p>
        }
      </div>
    )
  }
}

export default withLoginChecker