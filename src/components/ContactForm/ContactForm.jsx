import { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number, this.reset);
    const isValidForm = this.validateForm();

    if (!isValidForm) return;

    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
    if (!name || !number) {
      alert('Some field is empty');
      return;
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label className={styles.label}>
          <span className={styles.text}>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.text}>Number</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
