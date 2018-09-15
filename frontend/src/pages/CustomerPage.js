import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Customer from '../components/Customer/Customer';

const CustomerPage = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Customer />
        </Col>
      </Row>
    </Container>
  </div>
);

export default CustomerPage;
