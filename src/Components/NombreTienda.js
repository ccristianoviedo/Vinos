import React from 'react';
import logo1 from '../img/logo 3.jpg'
import './NombreTienda.css'


export default function NombreTienda () {
    return (
        <>  
            <div className='titulo'>
                <div className='tituloa'>
                    <img src={logo1}/>
                </div>
                <div className='titulob'>
                    <h1>Wines</h1>
                </div>
            </div>

        </>
    )
}