import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Info from './Info'
import Languages from './Languages'
import CategoriesNav from './CategoriesNav'
import Menu from './Menu'
import Footer from './Footer'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeLang, setActiveLang] = useState('pl')

  const makeActiveLang = (lang) => {
    setActiveLang(lang)
  }

  const getProducts = async () => {
    const response = await fetch('./products.json')
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (loading === false) {
    return (
      <React.Fragment>
        <Header></Header>
        <Info></Info>
        <Languages makeActiveLang={makeActiveLang}></Languages>
        <CategoriesNav
          products={products}
          activeLang={activeLang}
        ></CategoriesNav>
        <Menu products={products} activeLang={activeLang}></Menu>
        <Footer></Footer>
      </React.Fragment>
    )
  }
  return <h1>loading</h1>
}

export default App
