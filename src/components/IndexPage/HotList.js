import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getHotList } from 'services/products';
import { CardColumns, Container, Card, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const CardTag = styled(Badge)`
  &.badge-light {
    opacity: .4;
  }
`;

const CardHot = styled(Card.Text)`
  position: absolute;
  top: 0;
  left: 0;
`;

const HotList = () => {
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    setHotList(getHotList());
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-3">熱門商品</h2>
      <CardColumns>
        {
          hotList.map(product => (
            <Card key={product.id}>
              <CardImg variant="top" src={product.image_url} />
              <Card.Body>
                <CardHot className="p-2">
                  <FontAwesomeIcon
                    size="2x"
                    className="text-danger"
                    icon={['fab', 'hotjar']}
                  />
                </CardHot>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle as="h3" className="mb-3 text-info">
                  ${product.origial_price.NTD.toFixed(2)}
                </Card.Subtitle>
                <Card.Text className="mb-2 text-muted">
                  {
                    ['S', 'M', 'L', 'XL']
                      .map(size => (
                        <CardTag
                          key={size}
                          variant={product.stock[size] ? 'success' : 'light'}
                          className="mr-2"
                        >
                          {size}
                        </CardTag>
                      ))
                  }
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="info" className="m-1">加入購物車</Button>
                <Button variant="secondary" href="/product" className="m-1">
                  查看
                </Button>
              </Card.Footer>
            </Card>
          ))
        }
      </CardColumns>
    </Container>
  );
}

export default HotList;
