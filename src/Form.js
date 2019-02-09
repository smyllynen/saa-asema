import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      condition: ''
    };
  }

  getWeather(event) {
    event.preventDefault();

    const api_key = 'da88789818170cd7f988348e162fbe8a';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.elements.city.value}&APPID=${api_key}&units=metric`)
      .then(response => response.json())
      .then(json => {
        console.log('Lämpotila: ' + json.main.temp);
        console.log('Olosuhteet: ' + json.weather[0].main)
      });
  }

  render() {
    return (
      <form onSubmit={this.getWeather}>
        <input type="text" name="city" />
        <input type="submit" value="Submit" />
        <p id="weather"></p>
        <p>
          {this.state.temperature}
          {this.state.weather}
        </p>
      </form>
    )
  }
}

export default Form;