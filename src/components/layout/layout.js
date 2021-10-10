import React from 'react'
import './layout.css'

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout-container'>
        <div className='layout-info'>
          <i className='fas fa-info-circle'></i>
        </div>
        <div className='location'>
          <div className='location-import'>
            <button className='import'>import</button>
            <button className='export'>export</button>
          </div>
          <label className='from'>
            <i className='fas fa-map-marker-alt'></i>
            <input type='text' placeholder='From city or port' />
          </label>
          <label className='to'>
            <i className='fas fa-map-marker-alt'></i>
            <input type='text' placeholder='To city or port' />
          </label>
          <label className='date'>
            <i className='fas fa-calendar'></i>
            <input type='text' placeholder='Ready date' />
          </label>
          <label className='select'>
            <select name='incoterms'>
              <option value='incoterm'>Incoterm</option>
              <option value='saab'>Send Freight</option>
            </select>
          </label>
          <label className='number'>
            <input type='number' placeholder='Total cargo value' />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Layout
