import { React, useState } from 'react'
import List from './cardlist'
import './cards.css'

const Cards = () => {
  const [select, setSelect] = useState('Air')
  return (
    <div className='card'>
      <div className='card-header'>
        <h3>Select a service</h3>
      </div>
      <div className='card-design'>
        <div className='cards'>
          {List.map((item) => {
            return (
              <div
                className='sea'
                key={item.id}
                style={{
                  background: select === item.name ? '#0c57a1' : 'white',
                }}
                onClick={() => {
                  setSelect(item.name)
                }}
              >
                <p
                  style={{
                    color: select === item.name ? 'white' : 'black',
                  }}
                >
                  {item.name}
                </p>
                <i
                  className={item.image}
                  style={{
                    color: select === item.name ? 'white' : 'gray',
                  }}
                ></i>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cards
