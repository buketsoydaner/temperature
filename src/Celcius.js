import React, { Component } from 'react'

class Celcius extends Component {
    constructor(props) {
		super(props);

		this.state = {
		}
	}






  render() {
    return (
        <div>
        <h5>Celcius </h5>
        <span>{this.props.value}</span>
				<span>&deg;C</span>
        </div>
    )
  }
}
export default Celcius;