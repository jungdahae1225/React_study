/*eslint-disable*/
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'
/* 기본 시작 구조
function App(){
  return (
    <div className="APP">

    </div>
  )
}
*/
function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );

  return (
    <div className="App">
      <div className="black-nav">
        <div>REACT_STUDY</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    ... 기타 내용
    </div>
  )
}


export default App;
