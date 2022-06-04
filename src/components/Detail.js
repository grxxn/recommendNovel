import { faArrowLeft, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import Report from './Report';

function Detail(props) {
  let navigate = useNavigate();
  let {id} = useParams(); // 클릭한 책의 id(url에서 가져온 번호)
  let booksLength = props.books.length; // 저장된 책의 갯수

  const recommend = ()=>{
    const recommendArr = [];
    for(let i = 0; i < booksLength; i++){
      if(i == id){
        // i와 id 값이 같다면 책을 보여주지 않고 패스
        continue;
      }
      recommendArr.push(
            <span className="rec-book" key={i} onClick={()=>{
              navigate('/recommendNovel/detail/'+props.books[i].id);
              window.scrollTo(0,0); // 페이지 이동시 페이지 상단으로 이동
              }}>
              <span className="book-content">
                <img src={require("../img/book"+ (props.books[i].id) +".jpg")} />
                {props.books[i].title}
              </span>
            </span>
      );
    }
    return recommendArr;
  };

  return (
    <div className="mainContainer">
      <FontAwesomeIcon icon={faHeart} className="heart-btn" onClick={(e)=>{
        window.alert('책을 찜하였습니다 !');
        props.cartHandler(id);
      }}/>
      <FontAwesomeIcon icon={faCartShopping} className="cart-btn" onClick={()=>{navigate('/recommendNovel/cart')}} />
      <FontAwesomeIcon icon={faArrowLeft} className="back-btn" onClick={()=>{navigate('/recommendNovel')}} />
      <div className="book-desc">
        {/* 클릭한 책에 대한 설명 */}
        <img src={require("../img/book"+(props.books[id].id)+".jpg")}/>
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
        <div className="rec-book-list">
          {recommend()}
        </div>
      </div>
    </div>
  )
}

export default Detail;