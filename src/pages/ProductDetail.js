import React, { useEffect, useState } from 'react';
import ProductBox from '../components/ProductBox';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useSearchParams();
  
  const getProduct = async () => {
    try {
      let keyword = query.get('q') || '';
      console.log('쿼리값', keyword);
      let url = `https://my-json-server.typicode.com/song-jiae/kolon-mall/productsq=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
      setLoading(false); // 데이터 로딩 완료 시 loading 상태 업데이트
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
      setLoading(false); // 오류 발생 시 loading 상태 업데이트
    }
  }

  useEffect(() => {
    getProduct();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>; // 데이터 로딩 중일 때 "Loading..." 메시지 표시
  }

  return (
    <div className='inner'>
      <div className='productWarp'>
        <ul className='productList'>
          {productList.map((menu, index) => (
            <li key={index}>
              <ProductBox item={menu} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductAll;
