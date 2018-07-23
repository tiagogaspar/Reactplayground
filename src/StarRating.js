import React, { Component } from 'react';
import './starRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

class StarRating extends Component {

  constructor (props){
    super(props);
    const {onClick} = props;
    this.state = {
      //callback to be called in event of stars selection
      callbackEvent: onClick,
      //current selected number of stars (internal)
      stars_selected: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ stars_selected : index});
    this.state.callbackEvent(index);
  }

  render() {
    return (
      <div>
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
