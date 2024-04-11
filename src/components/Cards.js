import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Olha esses pets!!!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/pet-1.jpg'
                        text='Nome'
                        label='...' 
                        path='/Adotar'
                    />
                    <CardItem 
                        src='images/pet-2.jpg'
                        text='Nome'
                        label='...' 
                        path='/Adotar'
                    />
                    <CardItem 
                        src='images/pet-3.jpg'
                        text='Nome'
                        label='...' 
                        path='/Adotar'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
