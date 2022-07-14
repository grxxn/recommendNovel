import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recommend = ({id, books}) => {
  const navigate = useNavigate();

  const recBookList = books.map((item, idx)=>{
    return(
    idx !== parseInt(id)
    ? <span 
        className='book-content' 
        key={item.id}
        onClick={()=>{
          navigate(`/recommendNovel/detail/${item.id}`);
          window.scrollTo(0, 0)
        }}
      > 
        <img src={require('../img/book' + item.id + '.jpg')} alt={item.title}/>
        <span>{item.title}</span>
      </span>
    : null
    )
  })

  return (
    <div className='rec-book-list'>
      {recBookList}
    </div>
  );
};

export default Recommend;