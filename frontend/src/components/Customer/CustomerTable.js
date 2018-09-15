import React, { Component } from 'react';
import { Table, ButtonGroup, Button } from 'reactstrap';

export default class CompanyTable extends Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Rewards N°</th>
            <th>DBO</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {this.props.customers.map((customer, index) => (
            <tr key={customer._id}>
              <th scope="row">{index + 1}</th>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.rewards}</td>
              <td>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                }).format(Date.parse(customer.dbo))}
              </td>
              <td>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                }).format(Date.parse(customer.createDate))}
              </td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    color="info"
                    onClick={this.props.edit.bind(this, customer._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    onClick={this.props.delete.bind(this, customer._id)}
                  >
                    Remove
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
