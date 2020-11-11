import React, { useEffect, useState } from 'react'

const CategoriesNav = ({ products, activeLang }) => {
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
      <div className='categories'>
        {categories.map((category, index) => {
          return (
            <div key={index} className='single-category'>
              <a href={`#${category}`}>
                <div
                  className='category-img'
                  style={{
                    backgroundImage:
                      'url("https://static.gotujmy.pl/FULL_SIZE/burger-538942.jpg")',
                  }}
                ></div>
                <div className='category-title'>{category}</div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CategoriesNav
