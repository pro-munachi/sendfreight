import React from 'react'
import Cards from '../cards/cards'
import Layout from '../layout/layout'
import Details from '../details/details'
import './body.css'

const Body = () => {
  return (
    <div className='body'>
      <div className='body-top'>
        <div className='body-container'>
          <div className='body-arrow'>
            <i className='fas fa-arrow-left'></i>
          </div>
          <div className='body-information'>
            <h2>New Booking</h2>
            <p>
              Fill in the information below to get a quote or create a new
              booking
            </p>
          </div>
        </div>
      </div>
      <Cards />
      <Layout />
      <Details />
    </div>
  )
}

export default Body
