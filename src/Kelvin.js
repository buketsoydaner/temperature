import React, { Component } from 'react'

export default class Kelvin extends Component {
    constructor(props) {
		super(props);

		this.state = {
		}
	}

  render() {
    return (
      <div>
        <h5>Kelvin </h5>
        <span>{this.props.value}</span>
				<span>&deg;K</span>
        </div>
    )
  }
}
