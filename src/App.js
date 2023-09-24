import './styles/reset.css'
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import Private from './Route/Private';
import { useEffect, useState } from 'react';
/*
유저스토리
1. css 작성 미디어쿼리작성
2. gnb상품 클릭시 상품 전체 페이지가 나온다
3. 로그인 버튼을 누르면 로그인 페이지가 나온다

4. 상품 클릭시 상품 디테일 페이지가 나온다
5. 상품 디테일을 눌렀으나 로그인이 안되었을 경우 로그인 페이지가 먼저나온다.
6. 로그인이 되어 있으면 상품 상세페이지를 볼 수 있다.
7. 상품을 검색할 수 있다.
*/
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{console.log('인증', authenticate);},[]);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/products/:id"
          element={<Private authenticate={authenticate} />}
        />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
