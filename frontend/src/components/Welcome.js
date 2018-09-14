import React from 'react';
import {
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
const Welcome = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">PoobInfo TechChallenge</h1>
        <p className="lead">
          For this exercise, you are required to create an application that
          contains two CRUDs.
        </p>
        <hr className="my-2" />
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading>Company table</ListGroupItemHeading>
            <ListGroupItemText>
              CompanyID (short) • CreateDate (datetime) • Name (string)
            </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>Customer table</ListGroupItemHeading>
            <ListGroupItemText>
              CustomerID (int) • CompanyID (short) • CreateDate (datetime) •
              RewardsNumber (string) • Name (string) • Email (string) • DOB
              (datetime)
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
