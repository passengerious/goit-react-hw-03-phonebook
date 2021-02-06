import React, { Component } from 'react';

import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

handleChange = e => {
  const { name, value } = e.currentTarget;
  this.setState({ [name]: value });
};

handleSubmit = e => {
  e.preventDefault();

  this.props.onSubmit(this.state);
  this.resetForm();
};

resetForm = () => this.setState(INITIAL_STATE);

render() {
  const { name, number } = this.state;
  return (
    <form onSubmit={this.handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="number"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ContactForm;
