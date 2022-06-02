import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Report(props) {
  let id = props.id;
  let reports = props.books[id].reports;

  return (
    <>
      <FontAwesomeIcon icon={faAngleLeft} className="reports-left-btn" onClick={()=>{
        const card = document.querySelector('.reports');
        let cardLeft = card.offsetLeft;
        
        cardLeft += 530;
        if(cardLeft > 0){
          cardLeft = 0;
        }
        card.style.left = cardLeft + 'px';
      }} />
      <div className="reports-card-box">
        <div className="reports">
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
      <FontAwesomeIcon icon={faAngleRight} className="reports-right-btn"
      onClick={()=>{
        const card = document.querySelector('.reports');
        let cardLeft = card.offsetLeft;
        let cardContainer = reports.length * 530;
        let cardWidth = document.querySelector('.reportsCardBox').offsetWidth;
        let maxLeft = cardContainer - cardWidth;

        cardLeft -= 530;
        if(cardLeft < (-maxLeft)){
          cardLeft = -maxLeft;
        }
        card.style.left = cardLeft + 'px';
      }}/>
    </>
  )
}

export default Report;