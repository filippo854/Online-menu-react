import React from 'react'

const Languages = ({ makeActiveLang }) => {
  return (
    <section>
      <div className='languages'>
        <div
          onClick={() => makeActiveLang('pl')}
          className='single-language polish-language'
        >
          Menu(Pl)
        </div>
        <div
          onClick={() => makeActiveLang('eng')}
          className='single-language english-language'
        >
          Menu(Eng)
        </div>
      </div>
    </section>
  )
}

export default Languages
