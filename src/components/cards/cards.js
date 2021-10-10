import { React, useState } from 'react'
import './cards.css'
import List from './cardlist'

const Services = () => {
  const [select, setSelect] = useState('Air Freight')
  return (
    <div className='services-div'>
      <div className='services-bodydiv'>
        <h3>Select a service</h3>
        <div className='four-divs'>
          {List.map((item) => {
            return (
              <div
                className='mini-div'
                key={item.id}
                style={{
                  background: select === item.name ? '#0747a6' : 'white',
                }}
                onClick={() => {
                  setSelect(item.name)
                }}
              >
                <p style={{ color: select === item.name ? 'white' : 'black' }}>
                  {item.name}
                  <br />
                  {item.names}
                </p>
                <i
                  className={item.image}
                  style={{ color: select === item.name ? 'white' : 'grey' }}
                >
                  {' '}
                </i>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
