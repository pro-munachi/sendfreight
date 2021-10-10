import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-search'>
        <p>
          <span className='send'>send</span>{' '}
          <span className='freight'>Freight</span>
        </p>
        <div>
          <form>
            <div>
              <i className='fas fa-search'></i>
              <input placeholder='Search' />
            </div>
          </form>
        </div>
      </div>
      <div className='header-button'>
        <div className='buttons'>
          <button className='request'>Request Quote</button>
          <button className='book'>Book Shipment</button>
        </div>
      </div>
    </header>
  )
}

export default Header
