import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: 'scale(0.5) translateY(50%)' }}>
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
};

const Home = ({
  campsite,
  promotion,
  partner,
  campsitesLoading,
  campsitesErrMess,
  promotionLoading,
  promotionErrMess,
  partnerLoading,
  partnerErrMess
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
            isLoading={promotionLoading}
            errMess={promotionErrMess}
          />
        </div>
        <div className='col-md m-1'>
          <RenderCard
            item={partner}
            isLoading={partnerLoading}
            errMess={partnerErrMess}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
