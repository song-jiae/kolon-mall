import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Header = ({ authenticate, setAuthenticate }) => {
  const[activeLink, setactiveLink]= useState(0); 
  const LinkClick = (index)=>{ setactiveLink(index); };
  const navigate = useNavigate();
  const goToLogin = () =>{ navigate('/login');};
  const onCheckEnter = (event) =>{
    if(event.key === 'Enter'){
      event.preventDefault();
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div className='header'>
      <div className='HeaderTop inner'>
        <Link to="/" className='logo'>
        </Link>
        <form>
          <input type='text' 
          onKeyPress={onCheckEnter}
          placeholder='신상품이 보고 싶다면? #신상품 태그'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className='snb'>
          <ul>
            <li>KOLON MALL</li>
            <li onClick={goToLogin}>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
            <Link to ='/'>
            <i class="fa-solid fa-basket-shopping"></i>
            </Link>
          </ul>
        </div>
      </div>
      <div className='gnb inner'>
        <Link to='/' 
        className={activeLink === 0 ? 'active':''}
        onClick={()=>LinkClick(0)}>소개
        </Link>
        <Link to='/' 
        className={activeLink === 1 ? 'active' : ''}
        onClick={()=>LinkClick(1)}
        >홈</Link>
        <Link to='pages/ProductAllpage' 
        className={activeLink===2 ? 'active': ''}
        onClick={()=>LinkClick(2)}
        >상품</Link>
        <Link to='/' 
        className={activeLink===3 ? 'active': ''}
        onClick={()=>LinkClick(3)}
        >기획전</Link>
        <Link to='/' 
        className={activeLink===4 ? 'active': ''}
        onClick={()=>LinkClick(4)}
        >컬렉션</Link>
        <Link to='/'
        className={activeLink===5 ? 'active': ''} 
        onClick={()=>LinkClick(5)}
        >매장안내</Link>
        <Link to='/' 
        className={activeLink===6 ? 'active': ''}
        onClick={()=>LinkClick(6)}
        >WEATHER MONSTER</Link>
      </div>
    </div>
  )
}

export default Header