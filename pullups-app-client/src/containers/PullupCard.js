import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const PullupCard = (props) => {
    
  return (
    <div>
      <Card className="pullupcard" onClick={props.onClick}>
        <CardImg top width="20%" src="https://i.redd.it/rvhyaxfpnol11.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.title}</CardTitle>
          <CardText>Created 01.01.2001</CardText>
        </CardBody>
      </Card>
    </div>
  );

};

export default PullupCard;