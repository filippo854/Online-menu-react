import React, { useEffect, useState } from 'react'

const Menu = ({ products, activeLang }) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(
        products.map((product) => {
          return product[`category_${activeLang}`]
        })
      ),
    ]
    setCategories(uniqueCategories)
  }, [activeLang])
  return (
    <section>
      <div id='menu'>
        {categories.map((category, index) => {
          return (
            <div key={index} className='menu-single-category' id={category}>
              <h1>{category}</h1>
              <div className='menu-single-category-dishes'>
                {products.map((product) => {
                  if (product[`category_${activeLang}`] == category) {
                    return (
                      <div className='menu-single-item' id={product.id}>
                        <div className='menu-single-item-title'>
                          <h1>{product[`name_${activeLang}`]}</h1>
                          <h2>{product[`description_${activeLang}`]}</h2>
                          <p>{product.price} zł</p>
                        </div>
                        <div
                          className='menu-single-item-img'
                          style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                      </div>
                    )
                  }
                  return
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Menu
