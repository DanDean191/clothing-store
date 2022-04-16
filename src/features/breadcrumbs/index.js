import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = (props) => {
  const { category } = props.path;

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/products?category="+category}>{category}</Link>
    </div>
  )
}

export default Breadcrumbs