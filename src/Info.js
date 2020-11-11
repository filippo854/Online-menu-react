import React from 'react'

const Info = () => {
  return (
    <section className='info'>
      <div className='square-info'>
        <h1>Nazwa restauracji</h1>
        <h2>Fast food</h2>
        <h2>+48 123456789</h2>
        <p>Drużbickiego 2, Poznań</p>
        <div
          className='info-adres-img'
          style={{
            backgroundImage: 'url(https://i.stack.imgur.com/yEshb.gif)',
          }}
        ></div>
      </div>
      <div className='about-info'>
        <h2>
          <strong>Otwarte: </strong> Pn-So 12:00-23 Nd 11:00-21:00
        </h2>
        <h2>
          <strong>Płatności:</strong> Viza, Master Card
        </h2>
        <h2>
          <strong>Parking:</strong> Na miejscu
        </h2>
        <h2>
          <strong>Kuchnia:</strong> Fast food
        </h2>
        <h2>
          <strong>O nas:</strong> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. In praesentium, eveniet suscipit at dolore esse?
        </h2>
      </div>
    </section>
  )
}

export default Info
