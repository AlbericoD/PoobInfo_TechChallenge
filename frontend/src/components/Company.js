import React, { Component } from 'react';
import { ApiCompany } from '../utils/api';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon
} from 'reactstrap';

import CompanyTable from './CompanyTable';

export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', temErro: '' };
  }
  componentDidMount() {
    this.listCompanys();
  }

  listCompanys = async () => {
    try {
      const response = await ApiCompany.listCompany();
      this.setState({ companies: response });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange(event) {
    this.setState({ value: event.target.value, temErro: '' });
  }
  sendForm = async (e) => {
    e.preventDefault();
    if (this.state.value.length) {
      try {
        await ApiCompany.createCompany({
          name: this.state.value
        });
        this.setState({ value: '' }, () => {
          this.listCompanys();
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({
        temErro: 'Need company name to register, please ty again.'
      });
    }
  };
  delete = async (id) => {
    try {
      await ApiCompany.deleteCompany(id);
      this.listCompanys();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { companies, temErro } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.sendForm.bind(this)}>
                <FormGroup>
                  <Label for="companyNameL">Company Name</Label>
                  <InputGroupAddon addonType="append">
                    <Input
                      type="text"
                      name=""
                      id="companyNameL"
                      placeholder="company name"
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)}
                    />
                    <Button color="secondary">Register Company!</Button>
                  </InputGroupAddon>
                  {temErro.length ? (
                    <p className="text-danger">{`Create company error: ${temErro}`}</p>
                  ) : null}
                </FormGroup>
              </Form>
              {companies ? (
                <CompanyTable companies={companies} delete={this.delete} />
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
