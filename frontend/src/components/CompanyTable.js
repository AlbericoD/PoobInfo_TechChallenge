import React, { Component } from 'react';
import { Table, ButtonGroup, Button } from 'reactstrap';

export default class Example extends Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        {console.log(this.props.companies)}
        <tbody>
          {this.props.companies.map((company, index) => (
            <tr key={company._id}>
              <th scope="row">{index + 1}</th>
              <td>{company.name}</td>
              <td>{company.createDate}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button color="info">Edit</Button>
                  <Button
                    color="danger"
                    onClick={this.props.delete.bind(this, company._id)}
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
