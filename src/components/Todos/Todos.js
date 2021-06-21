import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes, { bool } from 'prop-types';

import './Todos.css';
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";

class Todos extends Component {   
  render() {
    const {item, onClick} = this.props;
    let url = checkImg;
    if (item.isComplete) {
      url = checkCompleteImg;
    }

    return( 
      <div className={
        classNames('Todos', {
          'complete': item.isComplete
        })
      }>
        <img onClick={onClick} src={url} width={24}/>
        <p>{item.title}</p>
      </div>
    )
  }
}

Todos.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool,
    title: PropTypes.string.isRequired    
  }),
  onClick: PropTypes.func
};

export default Todos; 