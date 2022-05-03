import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Frenzel Law LLC</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/practices.jpg'
              text='Explore what we have to offer'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/careers.jpg'
              text='Apply for a position'
              label='Career'
              path='/career'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/contact.jpg'
              text='Contact us'
              label='Contact'
              path='/contact'
            />
            <CardItem
              src='images/about.jpg'
              text='About us'
              label='About'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;