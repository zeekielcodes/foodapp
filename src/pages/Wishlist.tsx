import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiShoppingBag, BiTrash } from 'react-icons/bi'
import Banner from '../components/Banner'
import { useStateContext } from '../components/StoreContext'

function Wishlist() {
    const { state, dispatch } = useStateContext()


    return (
        <div>
            <Banner pageName="My Wishlist" page="Wishlist" />
            <div className="wishlist">
                {state.wishlist.map(item =>
                    <div className="wishlist-item">
                        <img src={require(`../assets/images/${item.image}`)} alt="" />
                        <div className="item-detail">
                            <h3>{item.name}</h3>
                            <h4>${(item.price).toFixed(2)}</h4>
                            <div className='flex my-2 items-center'>
                                <p className='flex items-center text-[#FF9F0D]'>{Array.from({ length: item.ratings }).map(() => <span><AiFillStar /></span>)}</p>
                                <p className='flex items-center text-[#E0E0E0]'>{Array.from({ length: 5 - item.ratings }).map(() => <span><AiFillStar /></span>)}</p>
                            </div>
                            <button className='text-[#FF9F0D]' onClick={() => dispatch({type:"AddToCart", payload:item})}><BiShoppingBag /> Move to Cart</button>
                            <button className='text-red-600' onClick={(() => dispatch({type:"removeFromWishlist", payload:item}))}><BiTrash /> Remove from Wishlist</button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Wishlist