import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

function Report(props) {
  // 인상깊은 구절 슬라이드 
  let id = props.id;
  let reports = props.books[id].reports;
  const cardEle = useRef();
  const cardBoxEle = useRef();

  const cardToLeft = () => {
    const card = cardEle.current;
    let cardLeft = card.offsetLeft;
        
    cardLeft += 530;
    if(cardLeft > 0){
      cardLeft = 0;
    }
    card.style.left = cardLeft + 'px';
  }
  const cardToRight = () => {
    const card = cardEle.current;
    let cardLeft = card.offsetLeft;
    let cardContainer = reports.length * 530;
    let cardWidth = cardBoxEle.current.offsetWidth;
    let maxLeft = cardContainer - cardWidth;

    cardLeft -= 530;
    if(cardLeft < (-maxLeft)){
      cardLeft = -maxLeft;
    }
    card.style.left = cardLeft + 'px';
  }

  return (
    <>
      <FontAwesomeIcon 
        icon={faAngleLeft} 
        className="reports-left-btn" 
        onClick={cardToLeft} 
      />
      <div className="reports-card-box" ref={cardBoxEle}>
        <div className="reports" ref={cardEle}>
          {
          // reports가 있는 경우에만 보여주고 아닐 경우 null
          reports
          ? <>{reports.map((a, i)=>{
            return <div className="report-card" key={i}>
              <p>{reports[i]}</p>
            </div>
            })}</>
          : null
          } 
        </div>
      </div>
      <FontAwesomeIcon 
        icon={faAngleRight} 
        className="reports-right-btn"
        onClick={cardToRight}
      />
    </>
  )
}

export default Report;