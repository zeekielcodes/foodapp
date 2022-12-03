import React, {useReducer} from 'react'

interface StateProps {
    state:{},
    action:{
        type:string,
        dispatch:{}
    }
}

const ShopContext = React.createContext({})

// const initial = {
//     menu: [],
//     cart: [],
//     user: {}
// }

// const reducer = ( {state, action}:StateProps ) => {
//     switch(action.type) {
//         case "AddToCart" : 
//         return {
//             ...state,
//         }
//     }

// }

// const [state, dispatch] = useReducer(reducer, initial)

const StoreContext = (children:React.ReactNode) => {

  return (
    <ShopContext.Provider value={useReducer}>
        {children}
    </ShopContext.Provider>
  )
}

export default StoreContext