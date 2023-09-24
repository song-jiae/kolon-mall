import React from 'react'
import {useNavigate} from 'react-router-dom';
const ProductBox = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/products/${item.id}`);
  }
  return (
    <div className='List' onClick={showDetail}>
      <img src={item?.img}></img>
      <p>KOLON SPORT</p>
      <h2>{item?.title}</h2>
      <h3>{item?.price}</h3>
      <span>{item?.tag}</span>
    </div>
  )
}
export default ProductBox;