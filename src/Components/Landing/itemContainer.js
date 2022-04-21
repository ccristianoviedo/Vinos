import React, {useState} from 'react';
import './ItemContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import portilloMalbec from'./imgLanding/portillo.jpeg'
import rutiniMalbec from'./imgLanding/rutinimalbec.jpg'
import rutiniMalbec1 from'./imgLanding/rutinimalbec1.jpg'
import ItemCount from './ItemCount';



const ItemContainer=()=>{
       
    return <>
            <UserCard id={1} img={rutiniMalbec} name='RUTINI' price={3400} descripcion='Dominio Malbec' stock={3} />
            <UserCard id={2} img={portilloMalbec} name='TRUMPETER' price={34} descripcion='Trumpeter Malbec'stock={0} />
            <UserCard id={3} img={rutiniMalbec1} name='RUTINI' price={34} descripcion='Encuentro Malbec' stock={4} />
            <UserCard id={4} img={portilloMalbec} name='PORTILLO' price={34} descripcion='Cabernet Sauvignon' stock={5} />
            <UserCard id={5} img={portilloMalbec} name='PORTILLO' price={34} descripcion='Chardonnay' stock={0} />
            <UserCard id={6} img={portilloMalbec} name='Killka' price={34} descripcion='Malbec' stock={7} />
            <UserCard id={7} img={portilloMalbec} name='Killka' price={34} descripcion='Chardonnay' stock={2}/>
            <UserCard id={8} img={portilloMalbec} name='SALENTEIN' price={34} descripcion='Cabernet Sauvignon' stock={6} /> 
            <UserCard id={8} img={portilloMalbec} name='SALENTEIN' price={34} descripcion='Cabernet Sauvignon' stock={6} />             
            
    </>
}

const UserCard =(props)=>{
    const [contador1, setContador1] = useState(1);
    
       
            const sumar1=()=>setContador1(contador1+1)
            const restar1=()=>setContador1(contador1-1)
            const reset=()=>setContador1(0)

            
            return (
                <div className='itemContainer'>
                        <img src={props.img} alt={props.name} className='imgLanding'/>        
                        <p>BODEGA:{props.name}</p>
                        <p>PRECIO: $ {props.price}</p>
                        <p>{props.descripcion}</p>
                        <p>STOCK: {props.stock}</p>
                        <p>CODIGO:{props.id}</p>
                        <ItemCount reset={reset} sumar1={sumar1} restar1={restar1} contador1={contador1} stock={props.stock}/>                       
                                                          
                </div>
            )       
        }                                     
    

           


export default ItemContainer