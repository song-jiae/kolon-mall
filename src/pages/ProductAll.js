import React, {useEffect, useState} from 'react';
import ProductBox from '../components/ProductBox';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  
  const [query, setQuery] = useSearchParams();
  const getProduct = async () =>{
    let keyword = query.get('q') || '';
    console.log('쿼리값', keyword);
    let url = `https://my-json-server.typicode.com/song-jiae/kolon-mall/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{getProduct()},[query]);
  return (
    <div className='inner'>
      <div className='productWarp'>
        <ul className='productList'>
          {productList.map((menu, index)=>(
          <li key={index}>
            <ProductBox item={menu}/>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ProductAll
