import React, { Component } from 'react';
import { Api } from '../../utils/api';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import CusterTable from './CustomerTable';
import EditModal from './EditModal';
export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temErro: '',
      customer: {},
      editNow: {},
      editar: false,
      id: null
    };
  }
  componentDidMount() {
    this.listCustomer();
  }

  listCustomer = async () => {
    try {
      const response = await Api.listCustomer();
      this.setState({ customers: response });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange(type, event) {
    const { value } = event.target;
    const { customer } = this.state;
    customer[type] = value;

    this.setState({ customer: customer, temErro: '' });
  }
  handleEditChange(type, event) {
    const { value } = event.target;
    const { editNow } = this.state;
    editNow[type] = value;
    this.setState({ editNow: editNow, temErro: '' });
  }
  sendForm = async (e) => {
    e.preventDefault();
    if (this.state.customer) {
      try {
        await Api.createCustomer(this.state.customer);
        this.setState({ value: '' }, () => {
          this.listCustomer();
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({
        temErro: 'Error to register, please try again.'
      });
    }
  };
  delete = async (id) => {
    try {
      await Api.deleteCustomer(id);
      this.listCustomer();
    } catch (error) {
      console.error(error);
    }
  };

  edit = async (id) => {
    try {
      const response = await Api.getCustomer(id);
      this.setState({ editar: true, editNow: response, id: response._id });
    } catch (error) {
      console.error(error);
    }
  };
  sendEdit = async () => {
    const { editNow, id } = this.state;
    try {
      await Api.modifyCustomer(id, editNow);
      this.toggle();
      this.listCustomer();
    } catch (error) {
      console.error(error);
    }
  };
  toggle = () => this.setState({ editar: false, name: {} });
  render() {
    const { customers, temErro, editar, editNow } = this.state;

    return (
      <div>
        <EditModal
          openModal={editar}
          body={editNow}
          confirmEdit={this.sendEdit}
          toggle={this.toggle}
          change={this.handleEditChange.bind(this)}
        />

        <Form onSubmit={this.sendForm.bind(this)}>
          <FormGroup>
            <Label for="companyNameL" />
            <InputGroup>
              <InputGroupAddon addonType="append">
                <Input
                  type="text"
                  name="name"
                  id="companyNameL"
                  placeholder="customer name"
                  value={this.state.customer.name}
                  onChange={this.handleChange.bind(this, 'name')}
                />
                <Input
                  type="email"
                  name="email"
                  id="companyNameL"
                  placeholder="email"
                  value={this.state.customer.email}
                  onChange={this.handleChange.bind(this, 'email')}
                />

                <Input
                  type="date"
                  name="dbo"
                  id="companyNameL"
                  placeholder="rewards number"
                  value={this.state.customer.dbo}
                  onChange={this.handleChange.bind(this, 'dbo')}
                />
                <Button color="secondary">Register !</Button>
              </InputGroupAddon>
            </InputGroup>
            {temErro.length ? (
              <p className="text-danger">{`Create customer error: ${temErro}`}</p>
            ) : null}
          </FormGroup>
        </Form>
        {customers ? (
          <CusterTable
            customers={customers}
            delete={this.delete}
            edit={this.edit}
          />
        ) : null}
      </div>
    );
  }
}
