import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function MainList(props) {
  let navigate = useNavigate();
  const list = useRef();

  useEffect(()=>{
    props.setListHeight(list.current.offsetTop);
  }, [props])

  return (
    <div className='book-list' ref={list}>
      {props.books.map((a, i) => {
        return (
          <div className='book-list-card' key={i} onClick={()=>{
            navigate('/recommendNovel/detail/' + props.books[i].id);
            window.scrollTo(0,0);}}>
            <span className='book-list-img'>
              <img src={require("./../img/book"+ (props.books[i].id) +".jpg")} alt=""/>
            </span>
            <p className='title'>{props.books[i].title}</p>
            <p className='writer'>{props.books[i].writer}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MainList;