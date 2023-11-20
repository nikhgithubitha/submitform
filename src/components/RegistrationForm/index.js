import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstError: false,
    lastError: false,
    isFormSubmitted: false,
    submitFirst: '',
    submitLast: '',
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  changeFirstDetails = () => {
    const {firstName} = this.state
    let text
    if (firstName === '') {
      text = '*Required'
      this.setState({firstError: true})
    } else {
      text = ''
    }
    return text
  }

  changeLastDetails = () => {
    const {lastName} = this.state
    let error = ''
    if (lastName === '') {
      error = '*Required'
      this.setState({lastError: true})
    }
    return error
  }

  displayResponse = event => {
    const {firstError, lastError, firstName, lastName} = this.state
    const errorValue = firstName === '' ? 'Required' : ''
    const textValue = lastName === '' ? 'Required' : ''
    if (
      firstError === false &&
      lastError === false &&
      firstName !== '' &&
      lastName !== ''
    ) {
      event.preventDefault()
      this.setState({isFormSubmitted: true, firstName: '', lastName: ''})
    }
    this.setState({submitFirst: errorValue, submitLast: textValue})
  }

  renderDefault = () => {
    const {
      firstName,
      lastName,
      firstError,
      lastError,
      submitFirst,
      submitLast,
    } = this.state
    const text = firstError ? 'Required' : ''
    const error = lastError ? 'Required' : ''

    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.displayResponse}>
          <label htmlFor="name">FIRST NAME</label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="First name"
            onChange={this.changeFirstName}
            value={firstName}
            onBlur={this.changeFirstDetails}
          />
          <p>{text}</p>
          <p>{submitFirst}</p>
          <label htmlFor="last">LAST NAME</label>
          <br />
          <input
            id="last"
            type="text"
            placeholder="Last name"
            onChange={this.changeLastName}
            value={lastName}
            onBlur={this.changeLastDetails}
          />
          <p>{error}</p>
          <p>{submitLast}</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  renderResponse = () => {
    const {isFormSubmitted} = this.state
    return (
      <div>
        {isFormSubmitted && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button onClick={this.renderDefault} type="button">
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div>
        {isFormSubmitted ? this.renderResponse() : this.renderDefault()}
      </div>
    )
  }
}

export default RegistrationForm
