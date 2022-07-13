import { faArrowLeft, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import Report from './Report';
import Recommend from './Recommend';

function Detail(props) {
  const books = props.books;
  let navigate = useNavigate();
  let {id} = useParams(); // 클릭한 책의 id(url에서 가져온 번호)

  return (
    <div className="mainContainer">
      <FontAwesomeIcon 
        icon={faHeart} 
        className="heart-btn" 
        onClick={()=>{
          window.alert('책을 찜하였습니다 !');
          props.cartHandler(id);
        }}
      />
      <FontAwesomeIcon 
        icon={faCartShopping} 
        className="cart-btn" 
        onClick={()=>{navigate('/recommendNovel/cart')}} 
      />
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className="back-btn" 
        onClick={()=>{navigate('/recommendNovel')}} 
      />
      <div className="book-desc">
        {/* 클릭한 책에 대한 설명 */}
        <img src={require("../img/book"+(props.books[id].id)+".jpg")} alt=""/>
        <span>
          <h2>{props.books[id].title}</h2>
          <p className="detail-writer">
            {props.books[id].writer}
          </p>
          <p className="title-detail">
            {props.books[id].titleDetail}
          </p>
          <p className="content">
            {props.books[id].content}
          </p>
        </span>
      </div>

      <div className="reports-container">
        {/* 클릭한 책의 인상깊은 구절 */}
        <p className="report-title">인상깊은 구절</p>
        <Report id={id} books={props.books}/>
      </div>

      <div className="recommend">
        {/* 다른 책 추천 */}
        <h4>다른 책 둘러보기</h4>
        <Recommend id={id} books={books} />
      </div>
    </div>
  )
}

export default Detail;