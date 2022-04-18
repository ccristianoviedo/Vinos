import React from 'react';
import './ItemContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import portilloMalbec from'./imgLanding/portillo.jpeg'
import rutiniMalbec from'./imgLanding/rutinimalbec.jpg'
import rutiniMalbec1 from'./imgLanding/rutinimalbec1.jpg'


const ItemContainer=()=>{
    
    return <>
            <UserCard id={1}img={rutiniMalbec} name='RUTINI' price={3400} descripcion='Dominio Malbec' stock={40} />
            <UserCard id={2}img={portilloMalbec} name='TRUMPETER' price={34} descripcion='Trumpeter Malbec'stock={30} />
            <UserCard id={3}img={rutiniMalbec1} name='RUTINI' price={34} descripcion='Encuentro Malbec' stock={10} />
            <UserCard id={4}img={portilloMalbec} name='PORTILLO' price={34} descripcion='Cabernet Sauvignon' stock={45} />
            <UserCard id={5}img={portilloMalbec} name='PORTILLO' price={34} descripcion='Chardonnay' stock={10} />
            <UserCard id={6}img={portilloMalbec} name='Killka' price={34} descripcion='Malbec' stock={20} />
            <UserCard id={7}img={portilloMalbec} name='Killka' price={34} descripcion='Chardonnay' stock={10} />
            <UserCard id={8}img={portilloMalbec} name='SALENTEIN' price={34} descripcion='Cabernet Sauvignon' stock={6} />       
    
    </>
}

const UserCard =(props)=>{
    return (
        <div className='itemContainer'>
                <img src={props.img} className='imgLanding'/>        
                <p>BODEGA:{props.name}</p>
                <p>PRECIO: $ {props.price}</p>
                <p>{props.descripcion}</p>
                <p>STOCK{props.stock}</p>
                <p>CODIGO:{props.id}</p>
                <button type="button" class="btn btn-secondary">COMPRAR</button>                        
        </div>
    )
           
}

export default ItemContainer