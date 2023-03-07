import { Component } from "react";
import Celcius from "./Celcius.js";
import Fahrenheit from "./Fahrenheit.js";
import Kelvin from "./Kelvin.js";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { degree: 0 };
  }
  handleChange(e) {
    if (parseInt(e.target.value))
      this.setState({ degree: parseInt(e.target.value) });
    else this.setState({ degree: 0 });
  }

  render() {
    return (
      <div>
        <div>
          <h2> Sıcaklık Birim Dönüştürücü</h2>
        </div>
        <div>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <br />
          <br />
          <button
            type="button"
            onClick={() => this.setState({ degree: this.state.degree + 1 })}
          >
            +1
          </button>
          <button
            type="button "
            onClick={() => this.setState({ degree: this.state.degree - 1 })}
          >
            -1
          </button>
        </div>
        <div>


          <Celcius value={this.state.degree} />
          <Fahrenheit value={((this.state.degree * 9) / 5 + 32).toFixed(2)} />
          <Kelvin value={(this.state.degree + 273.15).toFixed(2)} />
        </div>
      </div>
    );
  }
}

export default App;
