import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Company from '../components/Company/Company';

const CompanyPage = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Company />
        </Col>
      </Row>
    </Container>
  </div>
);

export default CompanyPage;
