import React, { Component } from 'react';
import './formRating.css';
import StarRating from './starRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class FormRating extends Component {

  constructor (props){
    super(props);
    this.state = {
      items : props.items,
      onSubmit : props.onSubmit
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    console.log("Submit");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div >
            <div className="cell_text">{this.state.items[0]}</div>
            <StarRating onClick={(index)=> {console.log("CalbackIndex: "+index)} }/>
          </div>
          <div style={{float:'left'}}>
            <div>{this.state.items[1]}</div>
            <StarRating onClick={(index)=> {console.log("CalbackIndex: "+index)} }/>
          </div>
        </div>

      </form>
    );
  }
}

export default FormRating;
