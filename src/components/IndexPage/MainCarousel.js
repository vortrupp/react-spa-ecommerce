import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Caption = styled(Carousel.Caption)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(40, 40, 40, .8);
  font-size: 3rem;
`;

const CarouselImage = styled.img`
  max-height: 300px;
  object-fit: cover;
`

const MainCarousel = () => {
  const images = [
    {
      id: 'img1',
      url: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg',
      text: '全館滿1000免運'
    },
    {
      id: 'img2',
      url: 'https://cdn.pixabay.com/photo/2016/03/27/22/05/businessman-1284463_960_720.jpg',
      text: '當週新品9折起'
    },
    {
      id: 'img3',
      url: 'https://cdn.pixabay.com/photo/2016/01/19/17/18/business-1149630_960_720.jpg',
      text: '換季折扣6折起'
    },
  ];
  return (
    <Carousel controls={false}>
      {
        images.map(item => (
          <Carousel.Item key={item.id}>
            <CarouselImage
              className="d-block w-100"
              src={item.url}
              alt={item.text}
            />
            <Caption className="d-flex justify-content-center align-items-center">
              <p>{item.text}</p>
            </Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default MainCarousel;
