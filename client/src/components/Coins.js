import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        sup;
        {this.props}
      </div>
    );
  }
}

Coins.propTypes = {

};

export default Coins;