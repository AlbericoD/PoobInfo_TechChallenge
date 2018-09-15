import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  InputGroupAddon,
  Input,
  Label
} from 'reactstrap';

class EditModal extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.openModal}
          toggle={this.props.abrir}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Edit Company</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.confirmEdit.bind(this)}>
              <FormGroup>
                <Label for="companyNameL" />
                <InputGroupAddon addonType="append">
                  <Input
                    type="text"
                    name=""
                    id="companyNameL"
                    placeholder="company name"
                    value={this.props.body.name}
                    onChange={this.props.change.bind(this, 'name')}
                  />
                  <Input
                    type="text"
                    name=""
                    id=""
                    placeholder="company name"
                    value={this.props.body.email}
                    onChange={this.props.change.bind(this, 'email')}
                  />
                  <Input
                    type="date"
                    name=""
                    placeholder="date"
                    value={this.props.body.dbo}
                    onChange={this.props.change.bind(this, 'dbo')}
                  />
                </InputGroupAddon>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.confirmEdit}>
              Confirm
            </Button>{' '}
            <Button color="danger" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
