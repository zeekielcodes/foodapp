import React, { useReducer, useContext } from 'react'
import { Product } from './model'

const ShopContext = React.createContext<{ state: State, dispatch: React.Dispatch<Action> } | undefined>(undefined)

interface State {
  cart: Product[],
  wishlist: Product[]
}

interface Action {
  type: string,
  payload: Product
}


interface ContextProps {
  children: React.ReactElement
}


const initial: { cart: Product[], wishlist: Product[] } = {
  cart: [],
  wishlist: []
}


export function useStateContext() {
  const context = useContext(ShopContext)
  if (context === undefined) {
    throw new Error("An error!")
  } else {
    return context
  }
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "AddToCart":
      console.log(state);

      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case "AddToWishlist":
      console.log(state);

      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      }
    default:
      return {
        ...state
      }
  }
}


const StoreContext = ({ children }: ContextProps) => {

  const [state, dispatch] = useReducer(reducer, initial)

  const sharedState = { state, dispatch }

  return (
    <ShopContext.Provider value={sharedState}>
      {children}
    </ShopContext.Provider>
  )
}

export default StoreContext