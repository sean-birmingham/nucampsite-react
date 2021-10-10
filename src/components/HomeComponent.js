import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

const Home = ({ campsite, promotion, partner }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md m-1'>
          <RenderCard item={campsite} />
        </div>
        <div className='col-md m-1'>
          <RenderCard item={promotion} />
        </div>
        <div className='col-md m-1'>
          <RenderCard item={partner} />
        </div>
      </div>
    </div>
  );
};

export default Home;
