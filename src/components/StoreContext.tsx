import React, { useReducer, useEffect, useContext } from 'react'
import { Product } from './model'

const ShopContext = React.createContext<{ state: State, dispatch: React.Dispatch<Action> } | undefined>(undefined)

interface State {
  isAuthenticated: boolean,
  user: any,
  showModal: boolean,
  modalContent: Modal,
  cart: Product[],
  wishlist: Product[],
  totalAmount: number
}

interface Action {
  type: string,
  payload?: any
}


interface ContextProps {
  children: React.ReactElement
}

interface Modal {
  title: string,
  text: string
}


const initial: { isAuthenticated:boolean, user:any, showModal: boolean, modalContent: Modal, cart: Product[], wishlist: Product[], totalAmount: number } = {
  isAuthenticated:false,
  user: null,
  showModal: false,
  modalContent: {
    title: "",
    text: ""
  },
  cart: [],
  wishlist: [],
  totalAmount: 0
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
      const newCart = [...state.cart, action.payload]
      return {
        ...state,
        cart: newCart,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
        totalAmount: newCart.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
      }

    case "AddToWishlist":
      const removeCart = state.cart.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        cart: removeCart,
        wishlist: [...state.wishlist, action.payload],
        totalAmount: removeCart.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)

      }

    case "UpdateCart":
      const update = state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity ? item.quantity + action.payload.quantity : item.quantity++ } : item)
      console.log(update);

      return {
        ...state,
        cart: update,
        totalAmount: update.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
      }

    case "reduceQuantity":
      const reduce = state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity-- } : item)

      return {
        ...state,
         cart: reduce,
        totalAmount: reduce.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
      }

    case "removeFromCart":
      const remove = state.cart.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        showModal: true,
        modalContent: {
          title: "Removed from cart",
          text: `${action.payload.name} removed from cart successfully`
        },
        cart: remove,
        totalAmount: remove.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
      }

    case "removeFromWishlist":
      return {
        ...state,
        showModal: true,
        modalContent: {
          title: "Removed from wishlist",
          text: `${action.payload.name} removed from wishlist successfully`
        },
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
      }
    
    case "OPEN_MODAL":     
      return {
        ...state,
        showModal: true,
        modalContent: action.payload

      }

    case "CLOSE_MODAL":
      return {
        ...state,
        showModal: false,
        modalContent: {
          title: "",
          text: ""
        },
      }

    case "LOGGED_IN" :
      console.log(action.payload);
      
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }

    case "LOGGED_OUT":
      return {
        ...state,
        isAuthenticated:false,
        user:null
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