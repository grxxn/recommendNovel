import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function MainList(props) {
  let navigate = useNavigate();
  const list = useRef();
  const bookList = props.books.map((book) => {
    return (
      <div className='book-list-card' key={book.id} onClick={()=>{
        navigate(`/recommendNovel/detail/${book.id}`);
        window.scrollTo(0,0);}}>
        <span className='book-list-img'>
          <img src={require("./../img/book"+ (book.id) +".jpg")} alt=""/>
        </span>
        <p className='title'>{book.title}</p>
        <p className='writer'>{book.writer}</p>
      </div>
    )
  })

  useEffect(()=>{
    props.setListHeight(list.current.offsetTop);
  }, [props])

  return (
    <div className='book-list' ref={list}>
      {bookList}
    </div>
  )
}

export default MainList;