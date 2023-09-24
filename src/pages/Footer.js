import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <footer>
        <section className='inner agency'><Link top='/'>대리점 개설문의</Link>
        </section>
        <section className='footer_bg'>
        <div className='footer'>
          <div className='footer_center inner'>
            <ul className='footer_left'>
              <li className='footer_logo'></li>
              <li>코오롱인더스트리㈜ FnC부문</li>
              <li>대표이사 : 유석진서울특별시 강남구 삼성로 518</li>
              <li>TEL : 1588-7667 (유료)Mail : kolonmall@kolon.com</li>
              <li>통신판매업신고 : 제2017-서울강남-02297호사업자등록번호 : 138-85-19612
              <a href='#' className='business'>사업자정보 확인</a>
              </li>
              <li className='margin'>고객님은 안전거래를 위해 결제 시 저희 사이트에서 가입한 구매안전 서비스를 이용하실 수있습니다. </li>
              <li>토스페이먼츠 <a href='가입확인' className='footer_join'>가입확인</a></li>
            </ul>
            <div className='footer_right'>
              <div className='footer_item'>
                <a href='#'>로그인</a>
                <a href='#'>실시간 채팅상담</a>
                <a href='#'>비회원 주문조회</a>
              </div>
              <div className='footer_item'>
                <a href='#'>매장안내</a>
                <a href='#'>입점/제휴문의</a>
                <a href='#'>이용약관</a>
                <a href='#'><b>개인정보 처리방침</b></a>
              </div>
              <div className='footer_item'>
                <a href='#'>고객센터</a>
                <a href='#'><em>1588-7667 (유료)</em></a>
                <a href='#'>(09:30 ~ 18:00, 주말/공휴일 휴무)</a>
              </div>
            </div>
          </div>
          <div className='footer_bottom inner'>
            <p>
            &copy;KOLON MALL all rights reserved
            </p>
            <table>
              <thead>
                <tr>
                  <td rowSpan="2">
                    <img src=''></img>
                  </td>
                  <td>인증범위</td>
                  <td>인터넷 쇼핑몰 운영(코오롱 패션샵)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>유효기간</td>
                  <td>2020.11.04 ~ 2023.11.03</td>
                </tr>
              </tbody>
            </table>
            <div className='social'>
              <a href='#'><i class="fa-solid fa-face-smile"></i></a>
              <a href='#'><i class="fa-brands fa-facebook"></i></a>
              <a href='#'><i class="fa-brands fa-instagram"></i></a>
              <a href='#'><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        </section>
      </footer>
  )
}

export default Footer