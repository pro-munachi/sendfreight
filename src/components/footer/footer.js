import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-header'>
        <h3>Additional Services</h3>
      </div>
      <br />
      <br />
      <div className='footer-bottom'>
        <form>
          <label className='switches'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>
          <div>
            <h3>Export Forwarding</h3>
            <p> We handle customs clearance and documentation</p>
          </div>
        </form>
        <form>
          <label className='switches'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>
          <div>
            <h3>Import Customs Clearance</h3>
            <p> We handle import customs and regulatory requirements</p>
          </div>
        </form>
        <form>
          <label className='switches'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>
          <div>
            <h3>Cargo Insurance</h3>
            <p> Protect your cargo from logistics risks up to its value</p>
          </div>
        </form>
        <form>
          <label className='switches'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>
          <div>
            <h3>Transport/Delivery</h3>
            <p> We deliver the cargo to your doorstep from the port</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer
