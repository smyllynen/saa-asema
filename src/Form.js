import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" name="city" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;