import React from 'react';
import './cartWidget.css'
import cartImg from'./imgLanding/cart.jpg'


const CartWidget=()=>{
    return(
        <>
        <img src={cartImg} className='cartImg'/>
        <label className='CartCounter'>1</label>
        </>
    )
}
export default CartWidget;