import { React, useState } from 'react'
import './details.css'

const Details = () => {
  const [select, setSelect] = useState('total')

  return (
    <div className='details'>
      <div className='cargo'>
        <div className='details-top'>
          <h2>Cargo Details</h2>
          <form>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p> Dangerous Cargo (ex Chemicals, Battery)</p>
          </form>
        </div>
        <div className='cargo-body'>
          <div className='cargo-button'>
            <button
              className={select === 'total' ? 'total' : 'package'}
              onClick={() => {
                setSelect('total')
              }}
            >
              Total Dimensions
            </button>
            <button
              className={select === 'package' ? 'total' : 'package'}
              onClick={() => {
                setSelect('package')
              }}
            >
              Package Details
            </button>
          </div>
        </div>
        <div className='cargo-input'>
          <label>
            <p>Test Volume</p>
            <input placeholder='cbm' />
          </label>
          <label>
            <p>Total Weight</p>
            <input placeholder='kg' />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Details
