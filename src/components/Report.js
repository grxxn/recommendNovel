import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination]);

function Report(props) {
  // 인상깊은 구절 슬라이드 
  let id = props.id;
  let reports = props.books[id].reports;

  return (
    <div className="card-swiper">
      <Swiper
        spaceBetween={44}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
        navigation
        /* breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }} */
      >
        {
          reports
          ? <div className="reports">
              {reports.map((item, i)=>{
                return <SwiperSlide className="report-card" key={i}>
                  <p>{item}</p>
                </SwiperSlide>
              })}
            </div>
          : null
        }
      </Swiper>
    </div>
  );
}

export default Report;