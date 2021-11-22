import React, { Component } from 'react'

export default class SetStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStep: null,
    }
  }
  
  handleForm = (event) => {
    event.preventDefault();
    this.props.setStep(this.state.newStep);
  }
  handleInput = ({ target: { name, value } }) => this.setState({ [name]: Number(value) })

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input type="text" onChange={this.handleInput} name="newStep" placeholder="Enter new step"></input>
        <input type="submit" value="set value"></input>
      </form>
    )
  }
}
