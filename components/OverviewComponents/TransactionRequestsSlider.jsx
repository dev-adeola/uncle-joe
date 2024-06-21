import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TradeRequestCard from "./TradeRequestCard";

const responsive = {
  desktop: {
    breakpoint: { max: 2560, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function TransactionRequestsSlider({
  transactionsRequests,
  isSuccess,
  IsSuccessRateData,
  rateData,
}) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      infinite={false}
      autoPlay={false}
      customTransition="all .5"
      transitionDuration={300}
      containerClass="carousel-container"
      itemClass="carousel-item-gap"
    >
      {isSuccess &&
        transactionsRequests?.data?.data?.map((request, index) => (
          <TradeRequestCard
            key={index}
            request={request}
            IsSuccessRateData={IsSuccessRateData}
            rateData={rateData}
          />
        ))}
    </Carousel>
  );
}

export default TransactionRequestsSlider;
