import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstError: false,
    lastError: false,
    isFormSubmitted: false,
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
    let error
    if (lastName === '') {
      error = '*Required'
      this.setState({lastError: true})
    } else {
      error = ''
    }
  }

  displayResponse = event => {
    const {firstError, lastError} = this.state
    if (firstError === false && lastError === false) {
      event.preventDefault()
      this.setState({isFormSubmitted: true, firstName: '', lastName: ''})
    }
  }

  renderDefault = () => {
    const {text} = this.changeFirstDetails()
    const {error} = this.changeLastDetails()
    const {firstName, lastName} = this.state

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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  renderResponse=()=>{
      return(
          (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <h1>Submitted Successfully</h1>
          <button onClick={this.renderDefault}>Submit Another Response</button>
        </div>
      )
      )

  }

  render() {
    const {text} = this.changeFirstDetails()
    const {error} = this.changeLastDetails()
    const {isFormSubmitted} = this.state

    return(
        {isFormSubmitted ? this.renderResponse() : this.renderDefault()}
    )
  }
}

export default RegistrationForm
