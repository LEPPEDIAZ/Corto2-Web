import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
      return (
        <form onSubmit={this.props.getWeather}>
            <input type= "text" name="city" placeholder="Ciudad..."/>
            <input type= "text" name="country" placeholder="Pais..."/>
            <input type= "Date" />
            <button> Go </button>
            
        </form>
      );
    }
  }
  export default Form;