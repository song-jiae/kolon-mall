import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import { Navigate } from 'react-router';

const Private = ({authenticate}) => {
  return authenticate == true ? <ProductDetail/>:<Navigate to ='/login'/>
}

export default Private