import React, { useReducer, useEffect, useContext } from 'react'
import { Product } from './model'

const ShopContext = React.createContext<{ state: State, dispatch: React.Dispatch<Action> } | undefined>(undefined)

interface State {
  cart: Product[],
  wishlist: Product[],
  totalAmount:number
}

interface Action {
  type: string,
  payload: Product
}


interface ContextProps {
  children: React.ReactElement
}


const initial: { cart: Product[], wishlist: Product[], totalAmount:number } = {
  cart: [],
  wishlist: [],
  totalAmount:0
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
      const newCart = [...state.cart, action.payload]
      return {
        ...state,
        cart: newCart,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
        totalAmount: newCart.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
      }

    case "AddToWishlist":
      console.log(state);
      const removeCart = state.cart.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        cart: removeCart,
        wishlist: [...state.wishlist, action.payload],
        totalAmount: removeCart.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
        
      }

      case "UpdateCart":
        const update = state.cart.map(item => item.id === action.payload.id ? {...item, quantity:item.quantity++} : item)
        console.log(update);
        
        return {
          ...state,
          cart: update,
          totalAmount: update.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
        }

        case "reduceQuantity":
          const reduce = state.cart.map(item => item.id === action.payload.id ? {...item, quantity:item.quantity--} : item)

          return {
            ...state,
            cart:reduce,
            totalAmount: reduce.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
          }

          case "removeFromCart" :
            const remove = state.cart.filter(item => item.id !== action.payload.id)
            return {
              ...state,
              cart: remove,
              totalAmount: remove.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
            }

            case "removeFromWishlist":
              return {
                ...state,
                wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
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