import React from 'react';
import './ItemDetalles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemDetalles =(props)=>{
            return (
                <div className='itemDetalles'>
                        <img src={props.img} alt={props.name} className='imgLanding'/>        
                        <p>BODEGA:{props.name}</p>
                        <p>PRECIO: $ {props.price}</p>
                        <p>{props.descripcion}</p>
                        <button>CERRAR</button>       
                </div>
            )       
        }                                     
    

           


export default ItemDetalles;