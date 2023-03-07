import React, { Component } from 'react'

export default class Fahrenheit extends Component {
    constructor(props) {
		super(props);

		this.state = {
		}
	}




  render() {
    return (
        <div>
        <h5>Fahrenheit </h5>
        <span>{this.props.value}</span>
				<span>&deg;F</span>
        </div>
    )
  }
}
