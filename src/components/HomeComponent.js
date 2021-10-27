import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }
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

const Home = ({
  campsite,
  promotion,
  partner,
  campsitesLoading,
  campsitesErrMess
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md m-1'>
          <RenderCard
            item={campsite}
            isLoading={campsitesLoading}
            errMess={campsitesErrMess}
          />
        </div>
        <div className='col-md m-1'>
          <RenderCard
            item={promotion}
            isLoading={campsitesLoading}
            errMess={campsitesErrMess}
          />
        </div>
        <div className='col-md m-1'>
          <RenderCard
            item={partner}
            isLoading={campsitesLoading}
            errMess={campsitesErrMess}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
