import React, { Component } from 'react';
import { Api } from '../../utils/api';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon
} from 'reactstrap';

import CompanyTable from './CompanyTable';
import EditModal from './EditModal';
export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      temErro: '',
      name: {},
      editar: false,
      id: null
    };
  }
  componentDidMount() {
    this.listCompanys();
  }

  listCompanys = async () => {
    try {
      const response = await Api.listCompany();
      this.setState({ companies: response });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange(event) {
    this.setState({ value: event.target.value, temErro: '' });
  }
  handleEditChange(event) {
    this.setState({ name: event.target.value, temErro: '' });
  }
  sendForm = async (e) => {
    e.preventDefault();
    if (this.state.value.length) {
      try {
        await Api.createCompany({
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
      await Api.deleteCompany(id);
      this.listCompanys();
    } catch (error) {
      console.error(error);
    }
  };

  edit = async (id) => {
    try {
      const response = await Api.getCompany(id);
      this.setState({ editar: true, name: response, id: response._id });
    } catch (error) {
      console.error(error);
    }
  };
  sendEdit = async () => {
    const { name, id } = this.state;
    try {
      await Api.modifyCompany(id, name);
      this.toggle();
      this.listCompanys();
    } catch (error) {
      console.error(error);
    }
  };
  toggle = () => this.setState({ editar: false, name: {} });
  render() {
    const { companies, temErro, editar, name } = this.state;

    return (
      <div>
        <EditModal
          openModal={editar}
          body={name}
          confirmEdit={this.sendEdit}
          toggle={this.toggle}
          change={this.handleEditChange.bind(this)}
        />

        <Form onSubmit={this.sendForm.bind(this)}>
          <FormGroup>
            <Label for="companyNameL" />
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
          <CompanyTable
            companies={companies}
            delete={this.delete}
            edit={this.edit}
          />
        ) : null}
      </div>
    );
  }
}
