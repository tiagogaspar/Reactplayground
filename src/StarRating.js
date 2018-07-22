import React, { Component } from 'react';
import './StarRating.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

class StarRating extends Component {

  constructor (props){
    super(props);
    this.state = {
      stars_selected: 0
  };

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ stars_selected : index});
    console.log('New state: ' + this.state.stars_selected);
  }

  render() {
    console.log('Rendered state: ' + this.state.stars_selected);
    return (
      <div className="StarRating">
        <FontAwesomeIcon icon={this.state.stars_selected > 0 ? fasStar : farStar} size="3x" onClick={() => this.handleClick(1)}/>
        <FontAwesomeIcon icon={this.state.stars_selected > 1 ? fasStar : farStar} size="3x" onClick={() => this.handleClick(2)}/>
        <FontAwesomeIcon icon={this.state.stars_selected > 2 ? fasStar : farStar} size="3x" onClick={() => this.handleClick(3)}/>
        <FontAwesomeIcon icon={this.state.stars_selected > 3 ? fasStar : farStar} size="3x" onClick={() => this.handleClick(4)}/>
        <FontAwesomeIcon icon={this.state.stars_selected > 4 ? fasStar : farStar} size="3x" onClick={() => this.handleClick(5)}/>
      </div>
    );
  }
}

export default StarRating;
