import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();
  const cartItem = JSON.parse(localStorage.getItem('cart'));
  return (
    <div className="mainContainer">
      <FontAwesomeIcon icon={faArrowLeft} className="back-btn" 
      onClick={()=>{navigate('/recommendNovel')}}/>
      <h2 className="cart-title">내가 찜한 책</h2>
      <div className="cart-container">
        {cartItem 
        ? cartItem.map((a, i)=>{
          return (<div key={i} className="cart-book" onClick={()=>{navigate('/recommendNovel/detail/'+a.id)}}>
            <span className="cart-book-img">
              <img src={require("../img/book"+ a.id +".jpg")} />
            </span>
            <p>{a.title}</p>
            <p>{a.writer}</p>
          </div>)
        })
        : <p className="cart-null">찜한 책이 없네요 ! 마음에 드는 책을 찜해보세요 ✨</p>
        }
      </div>
    </div>
  )
}

export default Cart;