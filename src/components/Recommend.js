import React from 'react';

const Recommend = ({id, books}) => {
  const recBookList = books.map((item, idx)=>{
    return(
    idx !== parseInt(id)
    ? <span className='book-content'>
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