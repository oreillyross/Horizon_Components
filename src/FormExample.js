import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class FormExampleFieldControl extends Component {
  state = {};

  handleChange = (e, { value }) => {
    console.log(e);
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Form
        onSubmit={() => {
          console.log(this.state);
        }}
      >
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
            value={this.state.firstname}
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default FormExampleFieldControl;
