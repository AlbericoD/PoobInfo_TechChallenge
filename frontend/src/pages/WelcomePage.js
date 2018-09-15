import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Welcome from '../components/Common/Welcome';

const WelcomePage = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Welcome />
        </Col>
      </Row>
    </Container>
  </div>
);

export default WelcomePage;
