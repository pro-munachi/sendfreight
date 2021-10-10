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
            <label className='switch' id='cargo'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>
              {' '}
              <span>Dangerous Cargo</span> (ex. Chemicals, Battery)
            </p>
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
        {select === 'total' ? (
          <div className='cargo-input'>
            <fieldset>
              <legend>Total Volume</legend>
              <input placeholder='cbm' />
            </fieldset>
            <br />

            <fieldset>
              <legend>Total Weight</legend>
              <input placeholder='kg' />
            </fieldset>
          </div>
        ) : (
          <div className='cargo-input'>
            <fieldset>
              <legend>Total Width</legend>
              <input placeholder='cm' />
            </fieldset>
            <br />
            <fieldset>
              <legend>Total Height</legend>
              <input placeholder='cm' />
            </fieldset>
          </div>
        )}
      </div>
    </div>
  )
}

export default Details
