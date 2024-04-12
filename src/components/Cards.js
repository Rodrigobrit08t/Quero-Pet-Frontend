import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Conheça</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/pet-1.jpg'
                        text='Descrição'
                        label='Nome' 
                        path='/Adotar'
                    />
                    <CardItem 
                        src='images/pet-2.jpg'
                        text='Descrição'
                        label='Nome' 
                        path='/Adotar'
                    />
                    <CardItem 
                        src='images/pet-3.jpg'
                        text='Descrição'
                        label='Nome' 
                        path='/Adotar'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
