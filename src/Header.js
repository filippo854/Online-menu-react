import React from 'react'

const header = () => {
  return (
    <header>
      <div className='navbar'>
        <ul className='nav-options'>
          <li>Jak to działa</li>
          <li>Kontakt</li>
          <li>O nas</li>
        </ul>
      </div>
      <div className='banner-text'>
        <h1>Zamów jedzenie już teraz</h1>
      </div>
      <div className='adres-input'>
        <input type='text' placeholder='Podaj adres dostawy' />
        <button className='search-btn'>Szukaj</button>
      </div>
    </header>
  )
}

export default header
