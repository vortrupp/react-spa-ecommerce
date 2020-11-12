import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const HotList = () => {
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
    <Container className="my-5">
      <h2 className="text-center">熱門商品</h2>
    </Container>
  );
}

export default HotList;
